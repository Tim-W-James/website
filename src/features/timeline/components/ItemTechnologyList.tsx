import Divider from "@components/layout/Divider";
import technologies from "@data/technologies";
import cn from "@styles/cssUtils";
import TimelineItemData from "../types/TimelineData";

const ItemTechnologyList: React.FC<{
  data: TimelineItemData;
  isOddIndex: boolean;
}> = ({ data: itemData, isOddIndex }) =>
  itemData.technologies ? (
    <>
      <Divider isReversed={!isOddIndex} label="Technologies" />

      <section aria-label="Technologies">
        {itemData.technologies.map((technology, index) => (
          <span key={index}>
            {" "}
            <a
              className={cn("inline-flex", "items-center")}
              href={technologies[technology].link}
              rel="noreferrer"
              target="_blank"
              title={technology}
            >
              {technologies[technology].icon ? (
                <>
                  {technologies[technology].icon}
                  {"\u00A0"}
                </>
              ) : null}
              {technology}
              {index < itemData.technologies!.length - 1 ? "," : ""}
            </a>
          </span>
        ))}
      </section>
    </>
  ) : null;

export default ItemTechnologyList;
