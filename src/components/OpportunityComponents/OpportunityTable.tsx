type TableColumn = {
  field: string;
  header: string | any;
};

interface TableProp {
  columns: TableColumn[];
  activities: any;
  className?: string;
}

const OpportunityTable = ({ columns, activities, className }: TableProp) => {
  return (
    <table className="w-full">
      <thead className="h-10">
        <tr className="bg-[#FAFAFA]">
          {columns &&
            columns.map((head, i) => (
              <th
                key={i}
                className={`${className} text-dark text-start text-sm font-medium xl:truncate`}
              >
                {head.header}
              </th>
            ))}
        </tr>
      </thead>
    </table>
  );
};

export default OpportunityTable;
