import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.body;

    try {
      const user = this.turnUserAdminUseCase.execute({ user_id });

      return response.status(201).json(user);
    } catch (err) {
      return response.status(404).json({ error: err.message });
    }
  }
}

export { TurnUserAdminController };
