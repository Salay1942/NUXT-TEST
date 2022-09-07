import prisma from '../src/prisma'
import { program } from 'commander'
import { hash } from 'bcrypt'

program
  .requiredOption('-u, --username <username>')
  .requiredOption('-p, --password <password>')
  .parse()

const options = program.opts()

async function addAdmin() {
  await prisma.$connect()
  await prisma.admin.create({
    data: {
      username: options.username,
      password: await hash(options.password, 10)
    }
  })
  console.log(`Add admin successfully\n - Username: ${options.username}\n - Password: ${options.password}`)
}

addAdmin()