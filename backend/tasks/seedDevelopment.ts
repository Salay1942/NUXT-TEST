import prisma from '../src/prisma'
import { program } from 'commander'
import { faker } from '@faker-js/faker'
import { random } from 'lodash'
import { Prisma } from '@prisma/client'

program
  .requiredOption('-c, --count <count>')
  .parse()

const options = program.opts()

async function seedData() {
  const products: Prisma.ProductCreateInput[] = []
  for(let i = 0; i < +options.count; i++) {
    const images: string[] = []
    for(let j = 0; j < random(1, 5); j++) {
      images.push(faker.image.image(600, 300, true))
    }
    products.push({
      title: faker.commerce.product(),
      description: faker.lorem.sentence(),
      images: images.join(','),
      price: random(100, 30000)
    })
  }
  await Promise.all(
    products.map(async (product) => {
      await prisma.product.create({
        data: product
      })
    })
  )
  console.log('Data seed successfully')
}

seedData()