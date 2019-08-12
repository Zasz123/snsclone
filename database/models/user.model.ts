import { Table, Column, Model, HasMany, PrimaryKey, AutoIncrement, AllowNull, DataType } from 'sequelize-typescript';

import Feed from './feed.model';
import FeedHeart from './feedHeart.model'
import ComHeart from './comHeart.model';
import Follow from './follow.model';
import Comment from './comment.model';

@Table({
    timestamps: true
})
export default class User extends Model<User> {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.INTEGER)
    id: number

    @AllowNull(false)
    @Column(DataType.STRING)
    userId: string

    @AllowNull(false)
    @Column(DataType.STRING)
    userPw: string

    @AllowNull(false)
    @Column(DataType.STRING)
    nickName: string

    @AllowNull(false)
    @Column(DataType.STRING)
    realName: string

    @AllowNull(true)
    @Column(DataType.STRING)
    profile: string


    
    @HasMany(() => Feed)
    feed: Feed[]

    @HasMany(() => FeedHeart)
    feedHeart: FeedHeart[]

    @HasMany(() => Comment)
    comment: Comment[]

    @HasMany(() => ComHeart)
    comHeart: ComHeart[]

    @HasMany(() => Follow)
    follow: Follow[]
}

