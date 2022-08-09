import * as Yup from 'yup'

export const productSchema = Yup.object().shape({
  productName: Yup.string()
    .min(3, 'Digite no mínimo 3 caracteres.')
    .max(50, 'Máximo de caracteres permitidos: 50.')
    .required('Preencha este campo.'),
  productDescription: Yup.string()
    .min(20, 'Digite no mínimo 20 caracteres.')
    .max(1000, 'Máximo de caracteres permitidos: 1000')
    .required('Preencha este campo.'),
  productPrice: Yup.number()
    .typeError('Digite apenas números.')
    .test(
      '',
      'O preço do produto deve ser no mínimo de R$0.50.',
      (value) => value >= 0.5
    )
    .required('Preencha este campo.'),
  productQuantity: Yup.number()
    .typeError('Digite apenas números.')
    .test(
      '',
      'É preciso ter no mínimo 1 item no estoque.',
      (value) => value >= 1
    )
    .required('Preencha este campo.')
    .integer('Insira um número inteiro. 1, 2... 10, 15...'),
  productCategory: Yup.string()
  .required('Preencha este campo.'),
  productImage: Yup.mixed().required('Uma imagem do produto é obrigatório'),
})
