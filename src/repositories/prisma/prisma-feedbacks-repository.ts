import {
  FeedbackCreateData,
  FeedbacksRepository,
} from '../feedback-repository';
import { prisma } from '../../prisma';

export class PrismaFeedbackRepository implements FeedbacksRepository {
  async create({
    type,
    comment,
    screenshot,
  }: FeedbackCreateData): Promise<void> {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
