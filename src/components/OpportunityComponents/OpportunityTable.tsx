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
      <tbody className="w-full">
        {activities &&
          activities.map((row: any, i: any) => (
            <tr
              key={i}
              className="h-fit w-full border-b border-[#EAECF0] last:border-none"
            >
              {columns?.map((col, i) => (
                <td
                  key={i}
                  className="first:text-left"
                >
                  {row[col.field]}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default OpportunityTable;
