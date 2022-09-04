
import * as yup from "yup";


export const schema = yup.object().shape({
name:yup.string().required('فیلد نام اجباری است'),
model:yup.string().required('فیلد مدل اجباری است'),
price:yup.string().required('فیلد قیمت اجباری است'),
quantity:yup.string().required('فیلد تعداد اجباری است'),
color:yup.string().required('فیلد رنگ اجباری است'),
description:yup.string().required('فیلد توضیحات اجباری است'),
category:yup.string().required('فیلد دسته بندی اجباری است')
})
