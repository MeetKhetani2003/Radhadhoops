import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { machines, getMachine } from "../../../data/machines";
import MachineDetailClient from "./MachineDetailClient";

export async function generateStaticParams() {
  return machines.map((machine) => ({
    slug: machine.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const machine = getMachine(slug);

  if (!machine) {
    return {
      title: "Machine Not Found",
    };
  }

  return {
    title: `${machine.name} | Radha Dhoops Machines`,
    description: machine.shortDescription,
    openGraph: {
      title: `${machine.name} | Radha Dhoops Machines`,
      description: machine.shortDescription,
      images: machine.images?.[0] ? [{ url: machine.images[0] }] : undefined,
    },
  };
}

export default async function MachineDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const machine = getMachine(slug);

  if (!machine) {
    notFound();
  }

  return <MachineDetailClient machine={machine} />;
}
