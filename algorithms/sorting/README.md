

## countingSort

步骤：
1. 找出最大、小值
2. 新建一个最小至最大之间的一个数组
3. 遍历原始数组，对出现的数字进行计数
4. 遍历新建的数组，过滤次数为0的项

## mergeSort

>合并排序，是采用分治的思想，递归的将数组分割成最小单元1，然后递归的合并这些最小单元；属属于稳定排序，相同数字在排序前后的位置是保持不变的

1. 将数组拆分成两个子数组
2. 递归的将子数组拆分，直至最小单元为1
3. 对左右两个数组进行比较，比较每一项，保存到数组里

