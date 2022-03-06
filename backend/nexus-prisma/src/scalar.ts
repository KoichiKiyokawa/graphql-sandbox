import { DateTimeResolver } from "graphql-scalars";
import { asNexusMethod } from "nexus";

const DateTime = asNexusMethod(DateTimeResolver, "date");

export const Scalars = [DateTime];
