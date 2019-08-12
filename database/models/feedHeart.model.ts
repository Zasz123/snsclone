import {Model, Table, AllowNull, Column, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo} from 'sequelize-typescript';

import User from './user.model'
import Feed from './feed.model'

@Table({
    timestamps: true
})
export default class FeedHeart extends Model<FeedHeart> {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.INTEGER)
    id: string

    @ForeignKey(() => Feed)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    feed_id: number

    @ForeignKey(() => User)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    user_id: number

    
    @BelongsTo(() => Feed, {
        onDelete: 'CASCADE'
    })
    feed: Feed

    @BelongsTo(() => User, {
        onDelete: 'CASCADE'
    })
    user: User
}