import {Model, Table, AllowNull, Column, DataType, PrimaryKey, AutoIncrement, BelongsTo, ForeignKey} from 'sequelize-typescript';

import User from './user.model';

@Table({
    timestamps: true
})
export default class Follow extends Model<Follow> {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.INTEGER)
    public id: string

    @ForeignKey(() => User)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    follower_id: number

    @AllowNull(false)
    @Column(DataType.INTEGER)
    followed_id: number

    
    @BelongsTo(() => User, {
        onDelete: 'CASCADE'
    })
    user: User
}