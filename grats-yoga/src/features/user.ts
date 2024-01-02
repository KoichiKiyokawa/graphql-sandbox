import { type Query } from "./base";

/** @gqlType */
type User = {
	/** @gqlField */
	id: string;
	/** @gqlField */
	name: string;
};

/** @gqlField */
export async function user(_: Query, args: { id: string }): Promise<User> {
	return {
		id: args.id,
		name: "hoge",
	};
}

/** @gqlField */
export async function users(_: Query): Promise<User[]> {
	return [
		{
			id: "1",
			name: "hoge",
		},
	];
}
