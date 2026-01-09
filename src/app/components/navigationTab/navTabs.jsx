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
import { useResizer } from "@/app/hooks/resizer.hook";

export default function NavTabs() {
  const pathName = usePathname();
  const [navTabs, setNavTabs] = useState(createNavTabs());
  const sensors = useSensors(useSensor(PointerSensor));

  const [visibleTab, setVisibleTab] = useState(10);
  const displayesItems = navTabs.slice(0, visibleTab);
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
          {displayesItems.map((tab) => {
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
