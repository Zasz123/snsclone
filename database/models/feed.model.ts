import {Column, Table, Model, AllowNull, DataType, Default, ForeignKey, HasMany, BelongsTo} from 'sequelize-typescript';

import User from './user.model';
import FeedImage from './feedImage.model';
import FeedHeart from './feedHeart.model';
import Comment from './comment.model';

@Table({
    timestamps: true
})
export default class Feed extends Model<Feed> {
    @ForeignKey(() => User)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    user_id: number

    @AllowNull(false)
    @Column(DataType.STRING)
    feedContents: string

    @AllowNull(false)
    @Default(0)
    @Column(DataType.INTEGER)
    heart: number
    

    @HasMany(() => Comment)
    comment: Comment[]

    @HasMany(() => FeedImage)
    feedImage: FeedImage[]

    @HasMany(() => FeedHeart)
    feedHeart: FeedHeart[]

    
    @BelongsTo(() => User, {
        onDelete: 'CASCADE'
    })
    user: User
    
}