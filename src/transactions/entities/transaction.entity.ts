
import {
    Model,
    Column,
    Table,
    PrimaryKey,
    DataType,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';

export enum TransactionCategory {
    CATEGORY1 = 'category1',
    CATEGORY2 = 'category2',
}

export const TransactionCategoryList: string[] =
    Object.values(TransactionCategory);

export enum TransactionType {
    CREDIT = 'credit',
    DEBIT = 'debit',
}

export const TransactionTypeList: string[] = Object.values(TransactionType);

@Table({
    tableName: 'transactions',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
})
export class Transaction extends Model {
    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
    id: string;

    @Column({ allowNull: false, type: DataType.DECIMAL(10, 2) })
    amount: number;

    @Column({ allowNull: false })
    type: TransactionType;


}