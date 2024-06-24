import prismaClient from "../prisma";

type CreateCustomerProps = {
  name: string;
  email: string;
};

class CreateCustomerService {
  async execute({ name, email }: CreateCustomerProps) {
    console.log("rota chamada");

    if (!name || !email) {
      throw new Error("Preencha todos os campos");
    }

    const customer = await prismaClient.customer.create({
      data: { name, email, status: true },
    });
    return customer;
  }
}

export { CreateCustomerService };
