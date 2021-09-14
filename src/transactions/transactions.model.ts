/*import { Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize/types';
import { ETypes } from './etc/types';

@Table
export class Transaction extends Model {
    @Column({
        autoIncrement: true,
        primaryKey: true,
    })
    id: DataTypes.IntegerDataType;

    @Column({ type: 'varchar' })
    type: ETypes;

    @Column({ type: 'varchar' })
    amount: DataTypes.FloatDataType;
}*/