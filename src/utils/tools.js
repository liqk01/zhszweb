// 工具类，封装常用函数
// 将a1清空，用a2填充进去
export function arrayFill(a1,a2)
{
    a1.splice(0,a1.length)
    for(let i =0;i<a2.length;i+=1)
    {
        a1.push(a2[i])
    }

}
// export default tools