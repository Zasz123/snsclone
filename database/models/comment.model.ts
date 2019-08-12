import { Table, Model, AllowNull, Column, DataType, Default, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';

import User from './user.model';
import Feed from './feed.model';

@Table({
    timestamps: true
})
export default class Comment extends Model<Comment> {
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

    @AllowNull(false)
    @Column(DataType.STRING)
    commentContents: string

    @AllowNull(false)
    @Default(0)
    @Column(DataType.INTEGER)
    heart: number

    
    @BelongsTo(() => Feed, {
        onDelete: 'CASCADE'
    })
    feed: Feed

    @BelongsTo(() => User, {
        onDelete: 'CASCADE'
    })
    user: User
}