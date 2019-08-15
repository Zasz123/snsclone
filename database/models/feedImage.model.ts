import {Model, Table, AllowNull, Column, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo} from 'sequelize-typescript'

import Feed from './feed.model';

@Table({
    timestamps: true
})
export default class FeedImage extends Model<FeedImage> {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.INTEGER)
    id: string

    @ForeignKey(() => Feed)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    feed_id: number

    // @AllowNull(false)
    @Column(DataType.STRING)
    feedImage: string

    
    @BelongsTo(() => Feed, {
        onDelete: 'CASCADE'
    })
    feed: Feed
}