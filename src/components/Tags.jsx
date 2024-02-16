import { useState } from "react";
import Tag from "./Tag";

const Tags = () => {
  const [checked, setChecked] = useState({
    isChecked1: false,
    isChecked2: false,
    isChecked3: false,
    isChecked4: false,
    isChecked5: false,
    isChecked6: false,
  });

  const handleToggle = (tagKey) => {
    setChecked((prevChecked) => ({
      ...prevChecked,
      [tagKey]: !prevChecked[tagKey],
    }));
  };

  const tagsData = [
    { key: "isChecked1", label: "Tag 1", labelText: "open" },
    { key: "isChecked2", label: "Tag 2", labelText: "close" },
    { key: "isChecked3", label: "Tag 3", labelText: "test" },
    { key: "isChecked4", label: "Tag 4", labelText: "testing" },
    { key: "isChecked5", label: "Tag 5", labelText: "closing" },
    { key: "isChecked6", label: "Tag 6", labelText: "closest" },
  ];
  return (
    <>
      <h3 className="font-bold mb-10 mt-5 ml-20">Tags</h3>
      <form className="ml-20" action="#">
        <div className="flex gap-10 flex-wrap max-w-[600px]">
          {tagsData.map((tag) => (
            <Tag
              key={tag.key}
              isChecked={checked[tag.key]}
              onToggle={() => handleToggle(tag.key)}
              label={tag.label}
              labelText={tag.labelText}
            />
          ))}
        </div>
      </form>
    </>
  );
};

export default Tags;
