"use client";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Link from "next/link";
import Image from "next/image";
import {
  activeClass,
  baseClass,
  hoverClass,
  traitClass,
} from "./stylesSortableBar";

export const SortableTab = ({ tab, isActive }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: tab.name });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Link
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      href={tab.url}
      className={`${baseClass} ${isActive ? activeClass : hoverClass}`}
      style={style}
    >
      <div className={traitClass} />
      <Image src={tab.icon} alt={tab.name} width={16} height={16} />
      {tab.name}
    </Link>
  );
};
