import { useState } from 'react'

import Section from '../Section'

import { GalleryItem } from '../../pages/Home'

import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import fechar from '../../assets/images/fechar.png'

import { Item, Items, Action, Modal, ModalContent } from './styles'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (Item: GalleryItem) => {
    if (Item.type === 'image') return Item.url
    return defaultCover
  }

  const getMediaIcon = (Item: GalleryItem) => {
    if (Item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a Midia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={fechar}
              alt="Ícone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe frameBorder="0" src={modal.url} />
          )}
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Gallery
