import {
  Minted as MintedEvent,
  Transfer as TransferEvent
} from "../generated/MyCollectible/MyCollectible"
import { Token } from "../generated/schema"

export function handleMinted(event: MintedEvent): void {
  let token = new Token(event.params.currentTokenId.toString())
  token.tokenId = event.params.currentTokenId
  token.owner = event.params.owner
  token.updatedAtTimestamp = event.block.timestamp
  token.save()
}

export function handleTransfer(event: TransferEvent): void {
  let token = Token.load(event.params.tokenId.toString())
  if (!token) {
    token = new Token(event.params.tokenId.toString())
  }
  token.owner = event.params.to
  token.updatedAtTimestamp = event.block.timestamp
  token.save()
}
