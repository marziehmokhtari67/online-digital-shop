
import * as Yup from "yup";


export const schema = Yup.object({
username:Yup.string().required(' نام الزامی است').min(2,'نام مشتری باید حداقل دارای دو کاراکتر باشد'),
lastname:Yup.string().required(' نام خانوادگی الزامی است').min(2,' نام خانوادگی باید حداقل دارای دو کاراکتر باشد'),
address:Yup.string().required('آدرس الزامی است').min(10,'آدرس باید حداقل دارای 10 کاراکتر باشد'),
phone:Yup.string().required('شماره تماس الزامی است').max(11,'شماره تماس باید حداکثر دارای 11 رقم باشد'),
expectAt:Yup.string().required('تاریخ تحویل الزامی است')
})
