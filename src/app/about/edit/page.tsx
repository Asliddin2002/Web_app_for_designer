// src/app/about/edit/page.tsx
"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SectionTittle from "@/components/tittles/SectionTittle";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const serviceSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
});

const companySchema = z.object({
  logoUrl: z.string().url("Must be a valid URL"),
});

const formSchema = z.object({
  bannerImage: z.string().url(),
  bannerTitle: z.string().min(1),
  bannerSubtitle: z.string().min(1),
  profileImage: z.string().url(),
  aboutTitle: z.string().min(1),
  aboutDescription: z.string().min(1),
  videoUrl: z.string().url(),
  services: z.array(serviceSchema).min(1),
  companies: z.array(companySchema).min(1),
});

export default function EditAboutPage() {
  const [initialData, setInitialData] = useState<InitialAboutData | null>(null);
  const router = useRouter();

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: async () => {
      const res = await fetch("/api/about");
      const data = await res.json();
      setInitialData(data);
      return data;
    },
  });

  const {
    fields: serviceFields,
    append: appendService,
    remove: removeService,
  } = useFieldArray({ control, name: "services" });

  const {
    fields: companyFields,
    append: appendCompany,
    remove: removeCompany,
  } = useFieldArray({ control, name: "companies" });

  const onSubmit = async (formData: any) => {
    try {
      const method = initialData?.id ? "PUT" : "POST";
      const res = await fetch("/api/about", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, id: initialData?.id }),
      });

      if (res.ok) {
        toast.success("Ma'lumotlar saqlandi!");
        router.push("/about");
      } else {
        throw new Error("Saqlashda xatolik yuz berdi");
      }
    } catch (error: any) {
      toast.error(error.message || "Noma'lum xatolik");
    }
  };

  if (!initialData) return <p className="p-4">Loading...</p>;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 p-6 max-w-4xl mx-auto mt-[80px]"
    >
      {/* Banner Section */}
      <section>
        <SectionTittle title="About" />
        <h2 className="text-xl font-semibold mb-2">Banner</h2>
        <div className="flex flex-col gap-3 mt-5">
          <input
            placeholder="Banner Image URL"
            {...register("bannerImage")}
            className="input px-3 py-2 border border-white"
          />
          <input
            placeholder="Banner Title"
            {...register("bannerTitle")}
            className="input px-3 py-2 border border-white"
          />
          <input
            placeholder="Banner Subtitle"
            {...register("bannerSubtitle")}
            className="input px-3 py-2 border border-white"
          />
        </div>
      </section>

      {/* About Section */}
      <section>
        <h2 className="text-xl font-semibold mb-2">About</h2>
        <div className="flex flex-col gap-2">
          <input
            placeholder="Profile Image URL"
            {...register("profileImage")}
            className="input border border-white px-3 py-2"
          />
          <input
            placeholder="About Title"
            {...register("aboutTitle")}
            className="input border border-white px-3 py-2"
          />
          <textarea
            placeholder="About Description"
            {...register("aboutDescription")}
            className="input border border-white px-3 py-2"
          />
          <input
            placeholder="Video URL"
            {...register("videoUrl")}
            className="input border border-white px-3 py-2"
          />
        </div>
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Services</h2>
        {serviceFields.map((field, index) => (
          <div
            key={field.id}
            className="border p-3 rounded mb-2 flex items-center gap-1"
          >
            <input
              placeholder="Service Title"
              {...register(`services.${index}.title`)}
              className="input px-3 py-2 flex-1 border border-customwhite"
            />
            <input
              placeholder="Service Description"
              {...register(`services.${index}.description`)}
              className="input px-3 py-2 flex-1 border border-customwhite"
            />
            <button
              type="button"
              onClick={() => removeService(index)}
              className=" text-customwhite text-sm border px-3 py-3 bg-customred cursor-pointer"
            >
              O'chirish
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendService({ title: "", description: "" })}
          className="cursor-pointer"
        >
          + Add Service
        </button>
      </section>

      {/* Companies Section */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Companies</h2>
        {companyFields.map((field, index) => (
          <div key={field.id} className="flex gap-2 items-center mb-2">
            <input
              placeholder="Logo URL"
              {...register(`companies.${index}.logoUrl`)}
              className="input px-3 py-2 border border-customwhite flex-1"
            />
            <button
              type="button"
              onClick={() => removeCompany(index)}
              className=" text-customwhite text-sm border px-3 py-3 bg-customred cursor-pointer"
            >
              O'chirish
            </button>
          </div>
        ))}
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => appendCompany({ logoUrl: "" })}
        >
          + Add Company Logo
        </button>
      </section>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={!isDirty || !isValid}
      >
        Saqlash
      </button>
    </form>
  );
}

export type InitialAboutData = {
  id: string;
  bannerImage: string;
  bannerTitle: string;
  bannerSubtitle: string;
  profileImage: string;
  aboutTitle: string;
  aboutDescription: string;
  videoUrl: string;
  services: { id: string; title: string; description: string }[];
  companies: { id: string; logoUrl: string }[];
};
