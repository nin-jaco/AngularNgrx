export interface IMessageHandlerStats {
  name: string;
  totalMessagesProcessed: number;
  totalMessagesFailed: number;
  totalRetries: number;
  totalNormalMessagesReceived: number;
  totalPriorityMessagesReceived: number;
  lastMessageProcessed?: string;
}
