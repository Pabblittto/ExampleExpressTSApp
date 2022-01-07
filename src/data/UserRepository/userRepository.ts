import { EntityRepository, Repository } from "typeorm";
import { User } from "../../entity/user";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  /**
   * Checks if provided email was used by another user
   * @param email Email for checking
   * @returns
   */
  async isEmailUsed(email: string) {
    const res = await this.createQueryBuilder("user")
      .where("user.email = :email", { email })
      .getOne();
    return !!res;
  }
}
