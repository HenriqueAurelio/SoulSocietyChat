import { Box, Text, TextField, Image, Button } from '@skynexui/components'
import { useState } from 'react'
import appConfig from '../config.json'

export default function ChatPage() {
  // Sua lógica vai aqui

  const [message, setMessage] = useState('')
  const [messageList, setMessageList] = useState([])

  function handleNewMessage(newMessage) {
    const message = {
      id: messageList.length + 1,
      text: newMessage,
      from: 'HenriqueAurelio',
    }
    setMessageList([message, ...messageList])
    setMessage('')
  }
  // ./Sua lógica vai aqui
  return (
    <Box
      styleSheet={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(https://www.teahub.io/photos/full/266-2668495_bleach-hd-wallpapers-1080p-j3w72pw-bleach-hd-wallpaper.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',
        color: appConfig.theme.colors.neutrals['000'],
      }}
    >
      <Box
        styleSheet={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
          borderRadius: '5px',
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: '100%',
          maxWidth: '95%',
          maxHeight: '95vh',
          padding: '32px',
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: 'relative',
            display: 'flex',
            flex: 1,
            height: '80%',
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: 'column',
            borderRadius: '5px',
            padding: '16px',
          }}
        >
          <MessageList messages={messageList} />

          <Box
            as="form"
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <TextField
              value={message}
              onChange={(event) => {
                const value = event.target.value
                setMessage(value)
              }}
              onKeyPress={(event) => {
                if (event.key == 'Enter') {
                  event.preventDefault()
                  handleNewMessage(message)
                }
              }}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                width: '100%',
                border: '0',
                resize: 'none',
                borderRadius: '5px',
                padding: '6px 8px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: '12px',
                color: appConfig.theme.colors.neutrals[200],
              }}
            ></TextField>
            <Button
              type="button"
              label="Enviar"
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals['000'],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
              styleSheet={{
                height: '80%',
                marginBottom: '10px',
              }}
              onClick={() => {
                handleNewMessage(message)
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: '100%',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text variant="heading5">Chat</Text>
        <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Logout"
          href="/"
        />
      </Box>
    </>
  )
}

function MessageList(props) {
  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1,
        color: appConfig.theme.colors.neutrals['000'],
        marginBottom: '16px',
      }}
    >
      {props.messages.map((message) => {
        return (
          <Text
            key={message.id}
            tag="li"
            styleSheet={{
              borderRadius: '5px',
              padding: '6px',
              marginBottom: '12px',
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700],
              },
            }}
          >
            <Box
              styleSheet={{
                marginBottom: '8px',
              }}
            >
              <Image
                styleSheet={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  display: 'inline-block',
                  marginRight: '8px',
                }}
                src={`https://github.com/vanessametonini.png`}
              />
              <Text tag="strong">{message.from}</Text>
              <Text
                styleSheet={{
                  fontSize: '10px',
                  marginLeft: '8px',
                  color: appConfig.theme.colors.neutrals[300],
                }}
                tag="span"
              >
                {new Date().toLocaleDateString()}
              </Text>
            </Box>
            {message.text}
          </Text>
        )
      })}
    </Box>
  )
}
