import { dataInsertion } from "./data_insertion";
import { dataSelection } from "./data_selection";
import { groupBy } from "./group_by";
import { orderBy } from "./order_by";
import { whereClause } from "./where_clause";

export const parks_recs_beginner = async () => {
  // await dataInsertion();
  // await dataSelection();
  // await whereClause();
  // await groupBy();
  await orderBy();
};
