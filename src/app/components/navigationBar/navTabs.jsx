"use client";
import { useState } from "react";
import { createNavTabs } from "@/app/utils/navTabsLinks/navLinksTabs";
import { DraggableTab } from "./draggableTab";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { handleDragEnd } from "@/app/utils/handleDragEnd";
import { usePathname } from "next/navigation";

export default function NavTabs() {
  const pathName = usePathname();
  const [navTabs, setNavTabs] = useState(createNavTabs());
  const sensors = useSensors(useSensor(PointerSensor));

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={(event) => handleDragEnd(event, navTabs, setNavTabs)}
    >
      <SortableContext
        items={navTabs.map((tab) => tab.name)}
        strategy={horizontalListSortingStrategy}
      >
        <div className="flex flex-wrap">
          {navTabs.map((tab) => {
            const isActive = pathName === tab.url;

            return (
              <DraggableTab key={tab.name} isActive={isActive} tab={tab} />
            );
          })}
        </div>
      </SortableContext>
    </DndContext>
  );
}
