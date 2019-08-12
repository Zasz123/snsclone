import {Column, AllowNull, Table, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo} from 'sequelize-typescript'

import User from './user.model';
import Comment from './comment.model'

@Table({
    timestamps: true
})
export default class ComHeart extends Model<ComHeart> {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.INTEGER)
    id: string

    @ForeignKey(() => Comment)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    commtnet_id: number

    @ForeignKey(() => User)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    user_id: number


    @BelongsTo(() => Comment, {
        onDelete: 'CASCADE'
    })
    comment: Comment

    @BelongsTo(() => User, {
        onDelete: 'CASCADE'
    })
    user: User
}

