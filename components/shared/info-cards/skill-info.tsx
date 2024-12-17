import { CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const SkillInfo = () => {
  const [items, setItems] = useState(["Example Item"]); // Список элементов
  const [isEditMode, setIsEditMode] = useState(false); // Режим редактирования
  const [newItem, setNewItem] = useState(""); // Текст нового элемента

  // Добавление нового элемента в список
  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem(""); // Очистить поле ввода
    }
  };

  // Удаление элемента по индексу
  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  // Переключение режима редактирования
  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };
  return (
    <CardContent
      className={cn(inter.className, "py-5 gap-5  border-[#D9D9D9] border-0")}
    >
      <div className="w-[200px] flex justify-between">
        <CardTitle className="text-[#212153] text-[24px] mb-5">
          Skills{" "}
        </CardTitle>
        <button
          onClick={toggleEditMode}
          className="text-[#7A82F8] text-[18px] mb-5"
        >
          {isEditMode ? "Stop Editing" : "Edit"}
        </button>
      </div>

      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between items-center py-3">
            <span>{item}</span>
            {isEditMode && (
              <button
                onClick={() => removeItem(index)}
                className="text-red-500 text-lg hover:text-red-700"
              >
                &times;
              </button>
            )}
          </li>
        ))}
      </ul>

      {isEditMode && (
        <div className="mt-4 flex space-x-2">
          <input
            type="text"
            placeholder="Enter item..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            className="w-full px-3 border-none rounded focus:outline-none "
          />
          <button
            onClick={addItem}
            className="bg-[#212153] hover:bg-white hover:text-[#212153] text-white rounded-[5px] text-sm font-semibold hover:outline hover:outline-[#212153] shadow-none"
          >
            Add Item
          </button>
        </div>
      )}
    </CardContent>
  );
};
