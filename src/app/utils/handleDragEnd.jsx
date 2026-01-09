import { arrayMove } from "@dnd-kit/sortable";
export const handleDragEnd = (event, navTabs, setNavTabs) => {
  const { active, over } = event;

  const oldIndex = navTabs.findIndex((tab) => tab.name === active.id);
  const newIndex = navTabs.findIndex((tab) => tab.name === over.id);

  setNavTabs(arrayMove(navTabs, oldIndex, newIndex));
  localStorage.setItem(
    "navTabsOrder",
    JSON.stringify(arrayMove(navTabs, oldIndex, newIndex))
  );
};
