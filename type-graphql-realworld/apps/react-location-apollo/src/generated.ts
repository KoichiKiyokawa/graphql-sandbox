export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateArticle = {
  __typename?: 'AggregateArticle';
  _count?: Maybe<ArticleCountAggregate>;
  _max?: Maybe<ArticleMaxAggregate>;
  _min?: Maybe<ArticleMinAggregate>;
};

export type AggregateLike = {
  __typename?: 'AggregateLike';
  _count?: Maybe<LikeCountAggregate>;
  _max?: Maybe<LikeMaxAggregate>;
  _min?: Maybe<LikeMinAggregate>;
};

export type AggregateTag = {
  __typename?: 'AggregateTag';
  _avg?: Maybe<TagAvgAggregate>;
  _count?: Maybe<TagCountAggregate>;
  _max?: Maybe<TagMaxAggregate>;
  _min?: Maybe<TagMinAggregate>;
  _sum?: Maybe<TagSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type Article = {
  __typename?: 'Article';
  _count?: Maybe<ArticleCount>;
  author: User;
  authorId: Scalars['String'];
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  likes: Array<Like>;
  slug: Scalars['String'];
  tags: Array<Tag>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type ArticleLikesArgs = {
  cursor?: InputMaybe<LikeWhereUniqueInput>;
  distinct?: InputMaybe<Array<LikeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LikeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LikeWhereInput>;
};


export type ArticleTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};

export type ArticleCount = {
  __typename?: 'ArticleCount';
  likes: Scalars['Int'];
  tags: Scalars['Int'];
};

export type ArticleCountAggregate = {
  __typename?: 'ArticleCountAggregate';
  _all: Scalars['Int'];
  authorId: Scalars['Int'];
  body: Scalars['Int'];
  createdAt: Scalars['Int'];
  slug: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ArticleCountOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ArticleCreateInput = {
  author: UserCreateNestedOneWithoutArticleInput;
  body: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  likes?: InputMaybe<LikeCreateNestedManyWithoutArticleInput>;
  slug?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<TagCreateNestedManyWithoutArticleInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ArticleCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<ArticleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ArticleCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<ArticleCreateWithoutAuthorInput>>;
};

export type ArticleCreateNestedOneWithoutLikesInput = {
  connect?: InputMaybe<ArticleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ArticleCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<ArticleCreateWithoutLikesInput>;
};

export type ArticleCreateNestedOneWithoutTagsInput = {
  connect?: InputMaybe<ArticleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ArticleCreateOrConnectWithoutTagsInput>;
  create?: InputMaybe<ArticleCreateWithoutTagsInput>;
};

export type ArticleCreateOrConnectWithoutAuthorInput = {
  create: ArticleCreateWithoutAuthorInput;
  where: ArticleWhereUniqueInput;
};

export type ArticleCreateOrConnectWithoutLikesInput = {
  create: ArticleCreateWithoutLikesInput;
  where: ArticleWhereUniqueInput;
};

export type ArticleCreateOrConnectWithoutTagsInput = {
  create: ArticleCreateWithoutTagsInput;
  where: ArticleWhereUniqueInput;
};

export type ArticleCreateWithoutAuthorInput = {
  body: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  likes?: InputMaybe<LikeCreateNestedManyWithoutArticleInput>;
  slug?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<TagCreateNestedManyWithoutArticleInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ArticleCreateWithoutLikesInput = {
  author: UserCreateNestedOneWithoutArticleInput;
  body: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<TagCreateNestedManyWithoutArticleInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ArticleCreateWithoutTagsInput = {
  author: UserCreateNestedOneWithoutArticleInput;
  body: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  likes?: InputMaybe<LikeCreateNestedManyWithoutArticleInput>;
  slug?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ArticleGroupBy = {
  __typename?: 'ArticleGroupBy';
  _count?: Maybe<ArticleCountAggregate>;
  _max?: Maybe<ArticleMaxAggregate>;
  _min?: Maybe<ArticleMinAggregate>;
  authorId: Scalars['String'];
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ArticleListRelationFilter = {
  every?: InputMaybe<ArticleWhereInput>;
  none?: InputMaybe<ArticleWhereInput>;
  some?: InputMaybe<ArticleWhereInput>;
};

export type ArticleMaxAggregate = {
  __typename?: 'ArticleMaxAggregate';
  authorId?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ArticleMaxOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ArticleMinAggregate = {
  __typename?: 'ArticleMinAggregate';
  authorId?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ArticleMinOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ArticleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ArticleOrderByWithAggregationInput = {
  _count?: InputMaybe<ArticleCountOrderByAggregateInput>;
  _max?: InputMaybe<ArticleMaxOrderByAggregateInput>;
  _min?: InputMaybe<ArticleMinOrderByAggregateInput>;
  authorId?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ArticleOrderByWithRelationInput = {
  author?: InputMaybe<UserOrderByWithRelationInput>;
  authorId?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  likes?: InputMaybe<LikeOrderByRelationAggregateInput>;
  slug?: InputMaybe<SortOrder>;
  tags?: InputMaybe<TagOrderByRelationAggregateInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ArticleRelationFilter = {
  is?: InputMaybe<ArticleWhereInput>;
  isNot?: InputMaybe<ArticleWhereInput>;
};

export enum ArticleScalarFieldEnum {
  AuthorId = 'authorId',
  Body = 'body',
  CreatedAt = 'createdAt',
  Slug = 'slug',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type ArticleScalarWhereInput = {
  AND?: InputMaybe<Array<ArticleScalarWhereInput>>;
  NOT?: InputMaybe<Array<ArticleScalarWhereInput>>;
  OR?: InputMaybe<Array<ArticleScalarWhereInput>>;
  authorId?: InputMaybe<StringFilter>;
  body?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  slug?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ArticleScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ArticleScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ArticleScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ArticleScalarWhereWithAggregatesInput>>;
  authorId?: InputMaybe<StringWithAggregatesFilter>;
  body?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  slug?: InputMaybe<StringWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ArticleUpdateInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutArticleInput>;
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  likes?: InputMaybe<LikeUpdateManyWithoutArticleInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUpdateManyWithoutArticleInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ArticleUpdateManyMutationInput = {
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ArticleUpdateManyWithWhereWithoutAuthorInput = {
  data: ArticleUpdateManyMutationInput;
  where: ArticleScalarWhereInput;
};

export type ArticleUpdateManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<ArticleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ArticleCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<ArticleCreateWithoutAuthorInput>>;
  delete?: InputMaybe<Array<ArticleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ArticleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ArticleWhereUniqueInput>>;
  set?: InputMaybe<Array<ArticleWhereUniqueInput>>;
  update?: InputMaybe<Array<ArticleUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: InputMaybe<Array<ArticleUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: InputMaybe<Array<ArticleUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type ArticleUpdateOneRequiredWithoutLikesInput = {
  connect?: InputMaybe<ArticleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ArticleCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<ArticleCreateWithoutLikesInput>;
  update?: InputMaybe<ArticleUpdateWithoutLikesInput>;
  upsert?: InputMaybe<ArticleUpsertWithoutLikesInput>;
};

export type ArticleUpdateOneWithoutTagsInput = {
  connect?: InputMaybe<ArticleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ArticleCreateOrConnectWithoutTagsInput>;
  create?: InputMaybe<ArticleCreateWithoutTagsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ArticleUpdateWithoutTagsInput>;
  upsert?: InputMaybe<ArticleUpsertWithoutTagsInput>;
};

export type ArticleUpdateWithWhereUniqueWithoutAuthorInput = {
  data: ArticleUpdateWithoutAuthorInput;
  where: ArticleWhereUniqueInput;
};

export type ArticleUpdateWithoutAuthorInput = {
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  likes?: InputMaybe<LikeUpdateManyWithoutArticleInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUpdateManyWithoutArticleInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ArticleUpdateWithoutLikesInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutArticleInput>;
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUpdateManyWithoutArticleInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ArticleUpdateWithoutTagsInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutArticleInput>;
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  likes?: InputMaybe<LikeUpdateManyWithoutArticleInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ArticleUpsertWithWhereUniqueWithoutAuthorInput = {
  create: ArticleCreateWithoutAuthorInput;
  update: ArticleUpdateWithoutAuthorInput;
  where: ArticleWhereUniqueInput;
};

export type ArticleUpsertWithoutLikesInput = {
  create: ArticleCreateWithoutLikesInput;
  update: ArticleUpdateWithoutLikesInput;
};

export type ArticleUpsertWithoutTagsInput = {
  create: ArticleCreateWithoutTagsInput;
  update: ArticleUpdateWithoutTagsInput;
};

export type ArticleWhereInput = {
  AND?: InputMaybe<Array<ArticleWhereInput>>;
  NOT?: InputMaybe<Array<ArticleWhereInput>>;
  OR?: InputMaybe<Array<ArticleWhereInput>>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<StringFilter>;
  body?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  likes?: InputMaybe<LikeListRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  tags?: InputMaybe<TagListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ArticleWhereUniqueInput = {
  slug?: InputMaybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Like = {
  __typename?: 'Like';
  /** どの投稿にいいねしたか */
  article: Article;
  articleSlug: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  /** 誰がいいねしたか */
  user: User;
  userId: Scalars['String'];
};

export type LikeCountAggregate = {
  __typename?: 'LikeCountAggregate';
  _all: Scalars['Int'];
  articleSlug: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type LikeCountOrderByAggregateInput = {
  articleSlug?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type LikeCreateInput = {
  article: ArticleCreateNestedOneWithoutLikesInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutLikesInput;
};

export type LikeCreateNestedManyWithoutArticleInput = {
  connect?: InputMaybe<Array<LikeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LikeCreateOrConnectWithoutArticleInput>>;
  create?: InputMaybe<Array<LikeCreateWithoutArticleInput>>;
};

export type LikeCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<LikeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LikeCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<LikeCreateWithoutUserInput>>;
};

export type LikeCreateOrConnectWithoutArticleInput = {
  create: LikeCreateWithoutArticleInput;
  where: LikeWhereUniqueInput;
};

export type LikeCreateOrConnectWithoutUserInput = {
  create: LikeCreateWithoutUserInput;
  where: LikeWhereUniqueInput;
};

export type LikeCreateWithoutArticleInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutLikesInput;
};

export type LikeCreateWithoutUserInput = {
  article: ArticleCreateNestedOneWithoutLikesInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type LikeGroupBy = {
  __typename?: 'LikeGroupBy';
  _count?: Maybe<LikeCountAggregate>;
  _max?: Maybe<LikeMaxAggregate>;
  _min?: Maybe<LikeMinAggregate>;
  articleSlug: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type LikeListRelationFilter = {
  every?: InputMaybe<LikeWhereInput>;
  none?: InputMaybe<LikeWhereInput>;
  some?: InputMaybe<LikeWhereInput>;
};

export type LikeMaxAggregate = {
  __typename?: 'LikeMaxAggregate';
  articleSlug?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type LikeMaxOrderByAggregateInput = {
  articleSlug?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type LikeMinAggregate = {
  __typename?: 'LikeMinAggregate';
  articleSlug?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type LikeMinOrderByAggregateInput = {
  articleSlug?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type LikeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LikeOrderByWithAggregationInput = {
  _count?: InputMaybe<LikeCountOrderByAggregateInput>;
  _max?: InputMaybe<LikeMaxOrderByAggregateInput>;
  _min?: InputMaybe<LikeMinOrderByAggregateInput>;
  articleSlug?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type LikeOrderByWithRelationInput = {
  article?: InputMaybe<ArticleOrderByWithRelationInput>;
  articleSlug?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum LikeScalarFieldEnum {
  ArticleSlug = 'articleSlug',
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type LikeScalarWhereInput = {
  AND?: InputMaybe<Array<LikeScalarWhereInput>>;
  NOT?: InputMaybe<Array<LikeScalarWhereInput>>;
  OR?: InputMaybe<Array<LikeScalarWhereInput>>;
  articleSlug?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type LikeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<LikeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<LikeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<LikeScalarWhereWithAggregatesInput>>;
  articleSlug?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type LikeUnique_LikeCompoundUniqueInput = {
  articleSlug: Scalars['String'];
  userId: Scalars['String'];
};

export type LikeUpdateInput = {
  article?: InputMaybe<ArticleUpdateOneRequiredWithoutLikesInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutLikesInput>;
};

export type LikeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LikeUpdateManyWithWhereWithoutArticleInput = {
  data: LikeUpdateManyMutationInput;
  where: LikeScalarWhereInput;
};

export type LikeUpdateManyWithWhereWithoutUserInput = {
  data: LikeUpdateManyMutationInput;
  where: LikeScalarWhereInput;
};

export type LikeUpdateManyWithoutArticleInput = {
  connect?: InputMaybe<Array<LikeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LikeCreateOrConnectWithoutArticleInput>>;
  create?: InputMaybe<Array<LikeCreateWithoutArticleInput>>;
  delete?: InputMaybe<Array<LikeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LikeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LikeWhereUniqueInput>>;
  set?: InputMaybe<Array<LikeWhereUniqueInput>>;
  update?: InputMaybe<Array<LikeUpdateWithWhereUniqueWithoutArticleInput>>;
  updateMany?: InputMaybe<Array<LikeUpdateManyWithWhereWithoutArticleInput>>;
  upsert?: InputMaybe<Array<LikeUpsertWithWhereUniqueWithoutArticleInput>>;
};

export type LikeUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<LikeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LikeCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<LikeCreateWithoutUserInput>>;
  delete?: InputMaybe<Array<LikeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LikeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LikeWhereUniqueInput>>;
  set?: InputMaybe<Array<LikeWhereUniqueInput>>;
  update?: InputMaybe<Array<LikeUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<LikeUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<LikeUpsertWithWhereUniqueWithoutUserInput>>;
};

export type LikeUpdateWithWhereUniqueWithoutArticleInput = {
  data: LikeUpdateWithoutArticleInput;
  where: LikeWhereUniqueInput;
};

export type LikeUpdateWithWhereUniqueWithoutUserInput = {
  data: LikeUpdateWithoutUserInput;
  where: LikeWhereUniqueInput;
};

export type LikeUpdateWithoutArticleInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutLikesInput>;
};

export type LikeUpdateWithoutUserInput = {
  article?: InputMaybe<ArticleUpdateOneRequiredWithoutLikesInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LikeUpsertWithWhereUniqueWithoutArticleInput = {
  create: LikeCreateWithoutArticleInput;
  update: LikeUpdateWithoutArticleInput;
  where: LikeWhereUniqueInput;
};

export type LikeUpsertWithWhereUniqueWithoutUserInput = {
  create: LikeCreateWithoutUserInput;
  update: LikeUpdateWithoutUserInput;
  where: LikeWhereUniqueInput;
};

export type LikeWhereInput = {
  AND?: InputMaybe<Array<LikeWhereInput>>;
  NOT?: InputMaybe<Array<LikeWhereInput>>;
  OR?: InputMaybe<Array<LikeWhereInput>>;
  article?: InputMaybe<ArticleRelationFilter>;
  articleSlug?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type LikeWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  unique_like?: InputMaybe<LikeUnique_LikeCompoundUniqueInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle: Article;
  createLike: Like;
  createTag: Tag;
  createUser: User;
  deleteArticle?: Maybe<Article>;
  deleteLike?: Maybe<Like>;
  deleteManyArticle: AffectedRowsOutput;
  deleteManyLike: AffectedRowsOutput;
  deleteManyTag: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteTag?: Maybe<Tag>;
  deleteUser?: Maybe<User>;
  login: User;
  logout: Scalars['Boolean'];
  updateArticle?: Maybe<Article>;
  updateLike?: Maybe<Like>;
  updateManyArticle: AffectedRowsOutput;
  updateManyLike: AffectedRowsOutput;
  updateManyTag: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateTag?: Maybe<Tag>;
  updateUser?: Maybe<User>;
  upsertArticle: Article;
  upsertLike: Like;
  upsertTag: Tag;
  upsertUser: User;
};


export type MutationCreateArticleArgs = {
  data: ArticleCreateInput;
};


export type MutationCreateLikeArgs = {
  data: LikeCreateInput;
};


export type MutationCreateTagArgs = {
  data: TagCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteArticleArgs = {
  where: ArticleWhereUniqueInput;
};


export type MutationDeleteLikeArgs = {
  where: LikeWhereUniqueInput;
};


export type MutationDeleteManyArticleArgs = {
  where?: InputMaybe<ArticleWhereInput>;
};


export type MutationDeleteManyLikeArgs = {
  where?: InputMaybe<LikeWhereInput>;
};


export type MutationDeleteManyTagArgs = {
  where?: InputMaybe<TagWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateArticleArgs = {
  data: ArticleUpdateInput;
  where: ArticleWhereUniqueInput;
};


export type MutationUpdateLikeArgs = {
  data: LikeUpdateInput;
  where: LikeWhereUniqueInput;
};


export type MutationUpdateManyArticleArgs = {
  data: ArticleUpdateManyMutationInput;
  where?: InputMaybe<ArticleWhereInput>;
};


export type MutationUpdateManyLikeArgs = {
  data: LikeUpdateManyMutationInput;
  where?: InputMaybe<LikeWhereInput>;
};


export type MutationUpdateManyTagArgs = {
  data: TagUpdateManyMutationInput;
  where?: InputMaybe<TagWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertArticleArgs = {
  create: ArticleCreateInput;
  update: ArticleUpdateInput;
  where: ArticleWhereUniqueInput;
};


export type MutationUpsertLikeArgs = {
  create: LikeCreateInput;
  update: LikeUpdateInput;
  where: LikeWhereUniqueInput;
};


export type MutationUpsertTagArgs = {
  create: TagCreateInput;
  update: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateArticle: AggregateArticle;
  aggregateLike: AggregateLike;
  aggregateTag: AggregateTag;
  aggregateUser: AggregateUser;
  article?: Maybe<Article>;
  articles: Array<Article>;
  findFirstArticle?: Maybe<Article>;
  findFirstLike?: Maybe<Like>;
  findFirstTag?: Maybe<Tag>;
  findFirstUser?: Maybe<User>;
  groupByArticle: Array<ArticleGroupBy>;
  groupByLike: Array<LikeGroupBy>;
  groupByTag: Array<TagGroupBy>;
  groupByUser: Array<UserGroupBy>;
  like?: Maybe<Like>;
  likes: Array<Like>;
  me: User;
  tag?: Maybe<Tag>;
  tags: Array<Tag>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateArticleArgs = {
  cursor?: InputMaybe<ArticleWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ArticleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ArticleWhereInput>;
};


export type QueryAggregateLikeArgs = {
  cursor?: InputMaybe<LikeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<LikeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LikeWhereInput>;
};


export type QueryAggregateTagArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryArticleArgs = {
  where: ArticleWhereUniqueInput;
};


export type QueryArticlesArgs = {
  cursor?: InputMaybe<ArticleWhereUniqueInput>;
  distinct?: InputMaybe<Array<ArticleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ArticleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ArticleWhereInput>;
};


export type QueryFindFirstArticleArgs = {
  cursor?: InputMaybe<ArticleWhereUniqueInput>;
  distinct?: InputMaybe<Array<ArticleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ArticleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ArticleWhereInput>;
};


export type QueryFindFirstLikeArgs = {
  cursor?: InputMaybe<LikeWhereUniqueInput>;
  distinct?: InputMaybe<Array<LikeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LikeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LikeWhereInput>;
};


export type QueryFindFirstTagArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByArticleArgs = {
  by: Array<ArticleScalarFieldEnum>;
  having?: InputMaybe<ArticleScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ArticleOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ArticleWhereInput>;
};


export type QueryGroupByLikeArgs = {
  by: Array<LikeScalarFieldEnum>;
  having?: InputMaybe<LikeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<LikeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LikeWhereInput>;
};


export type QueryGroupByTagArgs = {
  by: Array<TagScalarFieldEnum>;
  having?: InputMaybe<TagScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TagOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryLikeArgs = {
  where: LikeWhereUniqueInput;
};


export type QueryLikesArgs = {
  cursor?: InputMaybe<LikeWhereUniqueInput>;
  distinct?: InputMaybe<Array<LikeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LikeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LikeWhereInput>;
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  Article?: Maybe<Article>;
  articleSlug?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type TagAvgAggregate = {
  __typename?: 'TagAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type TagAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type TagCountAggregate = {
  __typename?: 'TagCountAggregate';
  _all: Scalars['Int'];
  articleSlug: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type TagCountOrderByAggregateInput = {
  articleSlug?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type TagCreateInput = {
  Article?: InputMaybe<ArticleCreateNestedOneWithoutTagsInput>;
  name: Scalars['String'];
};

export type TagCreateNestedManyWithoutArticleInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutArticleInput>>;
  create?: InputMaybe<Array<TagCreateWithoutArticleInput>>;
};

export type TagCreateOrConnectWithoutArticleInput = {
  create: TagCreateWithoutArticleInput;
  where: TagWhereUniqueInput;
};

export type TagCreateWithoutArticleInput = {
  name: Scalars['String'];
};

export type TagGroupBy = {
  __typename?: 'TagGroupBy';
  _avg?: Maybe<TagAvgAggregate>;
  _count?: Maybe<TagCountAggregate>;
  _max?: Maybe<TagMaxAggregate>;
  _min?: Maybe<TagMinAggregate>;
  _sum?: Maybe<TagSumAggregate>;
  articleSlug?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type TagListRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagMaxAggregate = {
  __typename?: 'TagMaxAggregate';
  articleSlug?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type TagMaxOrderByAggregateInput = {
  articleSlug?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type TagMinAggregate = {
  __typename?: 'TagMinAggregate';
  articleSlug?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type TagMinOrderByAggregateInput = {
  articleSlug?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type TagOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TagOrderByWithAggregationInput = {
  _avg?: InputMaybe<TagAvgOrderByAggregateInput>;
  _count?: InputMaybe<TagCountOrderByAggregateInput>;
  _max?: InputMaybe<TagMaxOrderByAggregateInput>;
  _min?: InputMaybe<TagMinOrderByAggregateInput>;
  _sum?: InputMaybe<TagSumOrderByAggregateInput>;
  articleSlug?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type TagOrderByWithRelationInput = {
  Article?: InputMaybe<ArticleOrderByWithRelationInput>;
  articleSlug?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export enum TagScalarFieldEnum {
  ArticleSlug = 'articleSlug',
  Id = 'id',
  Name = 'name'
}

export type TagScalarWhereInput = {
  AND?: InputMaybe<Array<TagScalarWhereInput>>;
  NOT?: InputMaybe<Array<TagScalarWhereInput>>;
  OR?: InputMaybe<Array<TagScalarWhereInput>>;
  articleSlug?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type TagScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TagScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TagScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TagScalarWhereWithAggregatesInput>>;
  articleSlug?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type TagSumAggregate = {
  __typename?: 'TagSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type TagSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type TagUpdateInput = {
  Article?: InputMaybe<ArticleUpdateOneWithoutTagsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TagUpdateManyMutationInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TagUpdateManyWithWhereWithoutArticleInput = {
  data: TagUpdateManyMutationInput;
  where: TagScalarWhereInput;
};

export type TagUpdateManyWithoutArticleInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutArticleInput>>;
  create?: InputMaybe<Array<TagCreateWithoutArticleInput>>;
  delete?: InputMaybe<Array<TagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
  update?: InputMaybe<Array<TagUpdateWithWhereUniqueWithoutArticleInput>>;
  updateMany?: InputMaybe<Array<TagUpdateManyWithWhereWithoutArticleInput>>;
  upsert?: InputMaybe<Array<TagUpsertWithWhereUniqueWithoutArticleInput>>;
};

export type TagUpdateWithWhereUniqueWithoutArticleInput = {
  data: TagUpdateWithoutArticleInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateWithoutArticleInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TagUpsertWithWhereUniqueWithoutArticleInput = {
  create: TagCreateWithoutArticleInput;
  update: TagUpdateWithoutArticleInput;
  where: TagWhereUniqueInput;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  Article?: InputMaybe<ArticleRelationFilter>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  articleSlug?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type TagWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  Article: Array<Article>;
  _count?: Maybe<UserCount>;
  birthday: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  likes: Array<Like>;
  name: Scalars['String'];
  passwordHash: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type UserArticleArgs = {
  cursor?: InputMaybe<ArticleWhereUniqueInput>;
  distinct?: InputMaybe<Array<ArticleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ArticleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ArticleWhereInput>;
};


export type UserLikesArgs = {
  cursor?: InputMaybe<LikeWhereUniqueInput>;
  distinct?: InputMaybe<Array<LikeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LikeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LikeWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  Article: Scalars['Int'];
  likes: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  birthday: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  passwordHash: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  birthday?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  passwordHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  Article?: InputMaybe<ArticleCreateNestedManyWithoutAuthorInput>;
  birthday: Scalars['DateTime'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  likes?: InputMaybe<LikeCreateNestedManyWithoutUserInput>;
  name: Scalars['String'];
  passwordHash: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateNestedOneWithoutArticleInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutArticleInput>;
  create?: InputMaybe<UserCreateWithoutArticleInput>;
};

export type UserCreateNestedOneWithoutLikesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<UserCreateWithoutLikesInput>;
};

export type UserCreateOrConnectWithoutArticleInput = {
  create: UserCreateWithoutArticleInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutLikesInput = {
  create: UserCreateWithoutLikesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutArticleInput = {
  birthday: Scalars['DateTime'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  likes?: InputMaybe<LikeCreateNestedManyWithoutUserInput>;
  name: Scalars['String'];
  passwordHash: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutLikesInput = {
  Article?: InputMaybe<ArticleCreateNestedManyWithoutAuthorInput>;
  birthday: Scalars['DateTime'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  passwordHash: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  birthday: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  passwordHash: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  birthday?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMaxOrderByAggregateInput = {
  birthday?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  passwordHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  birthday?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinOrderByAggregateInput = {
  birthday?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  passwordHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  birthday?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  passwordHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  Article?: InputMaybe<ArticleOrderByRelationAggregateInput>;
  birthday?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  likes?: InputMaybe<LikeOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  passwordHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Birthday = 'birthday',
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  PasswordHash = 'passwordHash',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  birthday?: InputMaybe<DateTimeWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  passwordHash?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserUpdateInput = {
  Article?: InputMaybe<ArticleUpdateManyWithoutAuthorInput>;
  birthday?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likes?: InputMaybe<LikeUpdateManyWithoutUserInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  passwordHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  birthday?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  passwordHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutArticleInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutArticleInput>;
  create?: InputMaybe<UserCreateWithoutArticleInput>;
  update?: InputMaybe<UserUpdateWithoutArticleInput>;
  upsert?: InputMaybe<UserUpsertWithoutArticleInput>;
};

export type UserUpdateOneRequiredWithoutLikesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<UserCreateWithoutLikesInput>;
  update?: InputMaybe<UserUpdateWithoutLikesInput>;
  upsert?: InputMaybe<UserUpsertWithoutLikesInput>;
};

export type UserUpdateWithoutArticleInput = {
  birthday?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likes?: InputMaybe<LikeUpdateManyWithoutUserInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  passwordHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutLikesInput = {
  Article?: InputMaybe<ArticleUpdateManyWithoutAuthorInput>;
  birthday?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  passwordHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutArticleInput = {
  create: UserCreateWithoutArticleInput;
  update: UserUpdateWithoutArticleInput;
};

export type UserUpsertWithoutLikesInput = {
  create: UserCreateWithoutLikesInput;
  update: UserUpdateWithoutLikesInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  Article?: InputMaybe<ArticleListRelationFilter>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  birthday?: InputMaybe<DateTimeFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  likes?: InputMaybe<LikeListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  passwordHash?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type GetArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetArticlesQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'Article', slug: string, title: string, body: string, authorId: string }> };

export type GetArticleQueryVariables = Exact<{
  where: ArticleWhereUniqueInput;
}>;


export type GetArticleQuery = { __typename?: 'Query', article?: { __typename?: 'Article', slug: string, title: string, body: string } | null };

export type CreateArticleMutationVariables = Exact<{
  input: ArticleCreateInput;
}>;


export type CreateArticleMutation = { __typename?: 'Mutation', createArticle: { __typename?: 'Article', slug: string } };
