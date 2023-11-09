export const typeDefs = {
    kind: "Document",
    definitions: [
        {
            kind: "ObjectTypeDefinition",
            name: { kind: "Name", value: "Post", loc: { start: 5, end: 9 } },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "id", loc: { start: 14, end: 16 } },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "ID", loc: { start: 18, end: 20 } },
                            loc: { start: 18, end: 20 },
                        },
                        loc: { start: 18, end: 21 },
                    },
                    directives: [],
                    loc: { start: 14, end: 21 },
                },
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "title", loc: { start: 24, end: 29 } },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 31, end: 37 },
                            },
                            loc: { start: 31, end: 37 },
                        },
                        loc: { start: 31, end: 38 },
                    },
                    directives: [],
                    loc: { start: 24, end: 38 },
                },
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "content", loc: { start: 41, end: 48 } },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 50, end: 56 },
                            },
                            loc: { start: 50, end: 56 },
                        },
                        loc: { start: 50, end: 57 },
                    },
                    directives: [],
                    loc: { start: 41, end: 57 },
                },
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "author", loc: { start: 60, end: 66 } },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "User",
                                loc: { start: 68, end: 72 },
                            },
                            loc: { start: 68, end: 72 },
                        },
                        loc: { start: 68, end: 73 },
                    },
                    directives: [],
                    loc: { start: 60, end: 73 },
                },
            ],
            loc: { start: 0, end: 75 },
        },
        {
            kind: "ObjectTypeDefinition",
            name: { kind: "Name", value: "Query", loc: { start: 82, end: 87 } },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "posts", loc: { start: 92, end: 97 } },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Post",
                                        loc: { start: 100, end: 104 },
                                    },
                                    loc: { start: 100, end: 104 },
                                },
                                loc: { start: 100, end: 105 },
                            },
                            loc: { start: 99, end: 106 },
                        },
                        loc: { start: 99, end: 107 },
                    },
                    directives: [],
                    loc: { start: 92, end: 107 },
                },
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "post", loc: { start: 110, end: 114 } },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                                loc: { start: 115, end: 117 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                        loc: { start: 119, end: 121 },
                                    },
                                    loc: { start: 119, end: 121 },
                                },
                                loc: { start: 119, end: 122 },
                            },
                            directives: [],
                            loc: { start: 115, end: 122 },
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Post",
                                loc: { start: 125, end: 129 },
                            },
                            loc: { start: 125, end: 129 },
                        },
                        loc: { start: 125, end: 130 },
                    },
                    directives: [],
                    loc: { start: 110, end: 130 },
                },
            ],
            loc: { start: 77, end: 132 },
        },
        {
            kind: "ObjectTypeDefinition",
            name: { kind: "Name", value: "User", loc: { start: 138, end: 142 } },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "id", loc: { start: 147, end: 149 } },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID",
                                loc: { start: 151, end: 153 },
                            },
                            loc: { start: 151, end: 153 },
                        },
                        loc: { start: 151, end: 154 },
                    },
                    directives: [],
                    loc: { start: 147, end: 154 },
                },
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "name", loc: { start: 157, end: 161 } },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 163, end: 169 },
                            },
                            loc: { start: 163, end: 169 },
                        },
                        loc: { start: 163, end: 170 },
                    },
                    directives: [],
                    loc: { start: 157, end: 170 },
                },
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "email", loc: { start: 173, end: 178 } },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 180, end: 186 },
                            },
                            loc: { start: 180, end: 186 },
                        },
                        loc: { start: 180, end: 187 },
                    },
                    directives: [],
                    loc: { start: 173, end: 187 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "password",
                        loc: { start: 190, end: 198 },
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 200, end: 206 },
                            },
                            loc: { start: 200, end: 206 },
                        },
                        loc: { start: 200, end: 207 },
                    },
                    directives: [],
                    loc: { start: 190, end: 207 },
                },
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "posts", loc: { start: 210, end: 215 } },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Post",
                                        loc: { start: 218, end: 222 },
                                    },
                                    loc: { start: 218, end: 222 },
                                },
                                loc: { start: 218, end: 223 },
                            },
                            loc: { start: 217, end: 224 },
                        },
                        loc: { start: 217, end: 225 },
                    },
                    directives: [],
                    loc: { start: 210, end: 225 },
                },
            ],
            loc: { start: 133, end: 227 },
        },
        {
            kind: "ObjectTypeDefinition",
            name: { kind: "Name", value: "Query", loc: { start: 234, end: 239 } },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "users", loc: { start: 244, end: 249 } },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "User",
                                        loc: { start: 252, end: 256 },
                                    },
                                    loc: { start: 252, end: 256 },
                                },
                                loc: { start: 252, end: 257 },
                            },
                            loc: { start: 251, end: 258 },
                        },
                        loc: { start: 251, end: 259 },
                    },
                    directives: [],
                    loc: { start: 244, end: 259 },
                },
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "user", loc: { start: 262, end: 266 } },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                                loc: { start: 267, end: 269 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                        loc: { start: 271, end: 273 },
                                    },
                                    loc: { start: 271, end: 273 },
                                },
                                loc: { start: 271, end: 274 },
                            },
                            directives: [],
                            loc: { start: 267, end: 274 },
                        },
                    ],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "User",
                            loc: { start: 277, end: 281 },
                        },
                        loc: { start: 277, end: 281 },
                    },
                    directives: [],
                    loc: { start: 262, end: 281 },
                },
            ],
            loc: { start: 229, end: 283 },
        },
    ],
    loc: { start: 0, end: 284 },
};
