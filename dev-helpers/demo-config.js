export default {
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json"
  ],
  "schemes": [
    "https"
  ],
  "swagger": "2.0",
  "info": {
    "title": "Bot API documentation.",
    "version": "1.0.0"
  },
  "basePath": "/api/bot/v1",
  "paths": {
    "/bots": {
      "get": {
        "security": [
          {
            "bot_token": [
              "[]"
            ]
          }
        ],
        "description": "Возвращает список ботов в соответствии с переданными параметрами, количество записей - 1000, если переданы оба параметра since и until или только until, то список будет отсортирован в обратном порядке",
        "tags": [
          "Bot API"
        ],
        "summary": "Получение списка ботов",
        "operationId": "b_ListBots",
        "parameters": [
          {
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "ID",
            "description": "Идентификатор бота",
            "name": "id",
            "in": "query"
          },
          {
            "enum": [
              "1",
              "0",
              "true",
              "false"
            ],
            "type": "string",
            "x-go-name": "Active",
            "description": "Флаг активности",
            "name": "active",
            "in": "query"
          },
          {
            "$ref": "#/definitions/BotRoles",
            "x-go-name": "Role",
            "description": "Роли бота",
            "name": "role",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "x-go-name": "Since",
            "description": "Изменен начиная с даты/время (с микросекундами)",
            "name": "since",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "x-go-name": "Until",
            "description": "Изменен вплоть до даты/время (с микросекундами)",
            "name": "until",
            "in": "query"
          },
          {
            "maximum": 1000,
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "Limit",
            "description": "Максимальное количество записей в ответе",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/listBotsResponse"
          },
          "400": {
            "$ref": "#/responses/apiErrorResponse"
          },
          "500": {
            "description": ""
          }
        }
      }
    },
    "/channels": {
      "get": {
        "security": [
          {
            "bot_token": [
              "[]"
            ]
          }
        ],
        "description": "channel_list_description.",
        "tags": [
          "Bot API"
        ],
        "summary": "channel_list_summary.",
        "operationId": "b_ListChannels",
        "parameters": [
          {
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "ID",
            "description": "Идентификатор запрашиваемого канала",
            "name": "id",
            "in": "query"
          },
          {
            "enum": [
              "telegram",
              "fbmessenger",
              "viber",
              "whatsapp",
              "skype",
              "vk",
              "instagram",
              "consultant",
              "yandex_chat",
              "custom"
            ],
            "type": "array",
            "items": {
              "type": "string"
            },
            "x-go-name": "Types",
            "description": "Список типов транспортов",
            "name": "types",
            "in": "query"
          },
          {
            "enum": [
              "1",
              "0",
              "true",
              "false"
            ],
            "type": "string",
            "x-go-name": "Active",
            "description": "Флаг активности канала",
            "name": "active",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "x-go-name": "Since",
            "description": "Нижняя граница даты последнего обновления канала",
            "name": "since",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "x-go-name": "Until",
            "description": "Верхняя граница даты последнего обновления канала",
            "name": "until",
            "in": "query"
          },
          {
            "maximum": 1000,
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "Limit",
            "description": "Количество элементов в ответе. Значение по умолчанию 1000",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/listChannelsResponse"
          },
          "400": {
            "$ref": "#/responses/apiErrorResponse"
          },
          "500": {
            "description": ""
          }
        }
      }
    },
    "/chats": {
      "get": {
        "security": [
          {
            "bot_token": [
              "[]"
            ]
          }
        ],
        "description": "Возвращает список чатов в соответствии с переданными параметрами, количество записей - 1000, если переданы оба параметра since и until или только until, то список будет отсортирован в обратном порядке",
        "tags": [
          "Bot API"
        ],
        "summary": "Получение списка чатов",
        "operationId": "b_ListChats",
        "parameters": [
          {
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "ID",
            "description": "Идентификатор чата",
            "name": "id",
            "in": "query"
          },
          {
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "ChannelID",
            "description": "Идентификатор чата",
            "name": "channel_id",
            "in": "query"
          },
          {
            "enum": [
              "telegram",
              "fbmessenger",
              "viber",
              "whatsapp",
              "skype",
              "vk",
              "instagram",
              "consultant",
              "yandex_chat",
              "custom"
            ],
            "type": "string",
            "x-go-name": "ChannelType",
            "description": "Тип канала",
            "name": "channel_type",
            "in": "query"
          },
          {
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "CustomerID",
            "description": "Идентификатор клиента",
            "name": "customer_id",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "x-go-name": "Since",
            "description": "Изменен начиная с даты/время",
            "name": "since",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "x-go-name": "Until",
            "description": "Изменен вплоть до даты/времени",
            "name": "until",
            "in": "query"
          },
          {
            "maximum": 1000,
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "Limit",
            "description": "Максимальное количество записей в ответе",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/listChatsResponse"
          },
          "400": {
            "$ref": "#/responses/apiErrorResponse"
          },
          "500": {
            "description": ""
          }
        }
      }
    },
    "/customers": {
      "get": {
        "security": [
          {
            "bot_token": [
              "[]"
            ]
          }
        ],
        "description": "Объект списка клиентов",
        "tags": [
          "Bot API"
        ],
        "summary": "Получение списка клиентов",
        "operationId": "b_ListCustomers",
        "parameters": [
          {
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "ID",
            "description": "Идентификатор клиента",
            "name": "id",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "x-go-name": "Since",
            "description": "Изменен начиная с даты/время",
            "name": "since",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "x-go-name": "Until",
            "description": "Изменен вплоть до даты/время",
            "name": "until",
            "in": "query"
          },
          {
            "type": "string",
            "x-go-name": "ExternalID",
            "description": "Внешний идентификатор клиента",
            "name": "external_id",
            "in": "query"
          },
          {
            "maximum": 1000,
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "Limit",
            "description": "Максимальное количество записей в ответе",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/listCustomersResponse"
          },
          "400": {
            "$ref": "#/responses/apiErrorResponse"
          },
          "500": {
            "description": ""
          }
        }
      }
    },
    "/dialogs": {
      "get": {
        "security": [
          {
            "bot_token": [
              "[]"
            ]
          }
        ],
        "description": "Возвращает список клиентов в соответствии с переданными параметрами, количество записей - 1000, если переданы оба параметра since и until или только until, то список будет отсортирован в обратном порядке",
        "tags": [
          "Bot API"
        ],
        "summary": "Получение списка диалогов",
        "operationId": "b_ListDialogs",
        "parameters": [
          {
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "ID",
            "description": "Идентификатор диалога",
            "name": "id",
            "in": "query"
          },
          {
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "ChatID",
            "description": "Идентификатор чата",
            "name": "chat_id",
            "in": "query"
          },
          {
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "UserID",
            "description": "Идентификатор назначенного менеджера",
            "name": "user_id",
            "in": "query"
          },
          {
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "BotID",
            "description": "Идентификатор назначенного бота",
            "name": "bot_id",
            "in": "query"
          },
          {
            "enum": [
              "1",
              "0",
              "true",
              "false"
            ],
            "type": "string",
            "x-go-name": "Active",
            "description": "Признак активности",
            "name": "active",
            "in": "query"
          },
          {
            "enum": [
              "1",
              "0",
              "true",
              "false"
            ],
            "type": "string",
            "x-go-name": "Assign",
            "description": "Признак назначения чата на менеджера или бота",
            "name": "assign",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "x-go-name": "Since",
            "description": "Изменен начиная с даты/время",
            "name": "since",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "x-go-name": "Until",
            "description": "Изменен вплоть до даты/время",
            "name": "until",
            "in": "query"
          },
          {
            "maximum": 1000,
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "Limit",
            "description": "Максимальное количество записей в ответе",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/listDialogsResponse"
          },
          "400": {
            "$ref": "#/responses/apiErrorResponse"
          },
          "500": {
            "description": ""
          }
        }
      }
    },
    "/dialogs/{dialog_id}/assign": {
      "patch": {
        "security": [
          {
            "bot_token": [
              "[]"
            ]
          }
        ],
        "description": "В теле запроса необходимо указать либо данные менеджера, на которого необходимо перевести диалог, либо данные бота",
        "tags": [
          "Bot API"
        ],
        "summary": "Назначение диалога на менеджера или на бота",
        "operationId": "b_AssignDialog",
        "parameters": [
          {
            "type": "integer",
            "format": "int64",
            "x-go-name": "DialogId",
            "description": "Идентификатор диалога",
            "name": "dialog_id",
            "in": "path",
            "required": true
          },
          {
            "name": "Body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/DialogResponsibleRequest"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/assignDialogResponse"
          },
          "400": {
            "$ref": "#/responses/apiErrorResponse"
          },
          "500": {
            "description": ""
          }
        }
      }
    },
    "/dialogs/{dialog_id}/close": {
      "patch": {
        "security": [
          {
            "bot_token": [
              "[]"
            ]
          }
        ],
        "description": "Закрывает диалог, помечая его обработанным и делая его недоступным",
        "tags": [
          "Bot API"
        ],
        "summary": "Закрытие диалога",
        "operationId": "b_CloseDialog",
        "parameters": [
          {
            "type": "integer",
            "format": "int64",
            "x-go-name": "DialogId",
            "description": "Идентификатор диалога",
            "name": "dialog_id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": ""
          },
          "400": {
            "$ref": "#/responses/apiErrorResponse"
          },
          "500": {
            "description": ""
          }
        }
      }
    },
    "/dialogs/{dialog_id}/unassign": {
      "patch": {
        "security": [
          {
            "bot_token": [
              "[]"
            ]
          }
        ],
        "description": "Убирает ответственного за обработку бота или менеджера",
        "tags": [
          "Bot API"
        ],
        "summary": "Снятие диалога с менеджера или бота",
        "operationId": "b_UnassignDialog",
        "parameters": [
          {
            "type": "integer",
            "format": "int64",
            "x-go-name": "DialogId",
            "description": "Идентификатор диалога",
            "name": "dialog_id",
            "in": "path",
            "required": true
          },
          {
            "name": "Body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/DialogResponsibleRequest"
            }
          }
        ],
        "responses": {
          "200": {
            "description": ""
          },
          "400": {
            "$ref": "#/responses/apiErrorResponse"
          },
          "500": {
            "description": ""
          }
        }
      }
    },
    "/files/upload": {
      "post": {
        "security": [
          {
            "bot_token": [
              "[]"
            ]
          }
        ],
        "description": "Загружает файл в хранилище и возвращает информацию о нем",
        "tags": [
          "Bot API"
        ],
        "summary": "Загрузка файла",
        "operationId": "b_UploadFile",
        "parameters": [
          {
            "type": "file",
            "x-go-name": "File",
            "name": "file",
            "in": "formData"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/uploadFileResponse"
          },
          "400": {
            "$ref": "#/responses/apiErrorResponse"
          },
          "500": {
            "description": ""
          }
        }
      }
    },
    "/files/upload_by_url": {
      "post": {
        "security": [
          {
            "bot_token": [
              "[]"
            ]
          }
        ],
        "description": "Загружает файл из внешних источников по URL",
        "tags": [
          "Bot API"
        ],
        "summary": "Загрузка файла по URL",
        "operationId": "b_UploadFileByUrl",
        "parameters": [
          {
            "name": "Body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/UploadFileByUrlRequest"
            }
          }
        ],
        "responses": {
          "200": {
            "description": ""
          },
          "400": {
            "$ref": "#/responses/apiErrorResponse"
          },
          "500": {
            "description": ""
          }
        }
      }
    },
    "/files/{id}": {
      "get": {
        "security": [
          {
            "bot_token": [
              "[]"
            ]
          }
        ],
        "description": "Получает информацию о загруженном файле",
        "tags": [
          "Bot API"
        ],
        "summary": "Получение файла",
        "operationId": "b_GetFiles",
        "parameters": [
          {
            "type": "string",
            "x-go-name": "Id",
            "description": "UUID файла",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/fullFileResponse"
          },
          "400": {
            "$ref": "#/responses/apiErrorResponse"
          },
          "500": {
            "description": ""
          }
        }
      }
    },
    "/members": {
      "get": {
        "security": [
          {
            "bot_token": [
              "[]"
            ]
          }
        ],
        "description": "Возвращает список участников чата в соответствии с переданными параметрами, количество записей - 1000, если переданы оба параметра since и until или только until, то список будет отсортирован в обратном порядке",
        "tags": [
          "Bot API"
        ],
        "summary": "Получение списка участников чата",
        "operationId": "b_ListMembers",
        "parameters": [
          {
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "ID",
            "description": "Идентификатор чата",
            "name": "id",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "x-go-name": "Since",
            "description": "Изменен начиная с даты/время",
            "name": "since",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "x-go-name": "Until",
            "description": "Изменен вплоть до даты/время",
            "name": "until",
            "in": "query"
          },
          {
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "ChatID",
            "description": "Идентификатор чата",
            "name": "chat_id",
            "in": "query"
          },
          {
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "UserID",
            "description": "Идентификатор менеджера",
            "name": "user_id",
            "in": "query"
          },
          {
            "enum": [
              "active",
              "kicked",
              "leaved"
            ],
            "type": "string",
            "x-go-name": "State",
            "description": "Состояние менеджера",
            "name": "state",
            "in": "query"
          },
          {
            "type": "integer",
            "format": "int64",
            "x-go-name": "Limit",
            "description": "Максимальное количество записей в ответе",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/listMembersResponse"
          },
          "400": {
            "$ref": "#/responses/apiErrorResponse"
          },
          "500": {
            "description": ""
          }
        }
      }
    },
    "/messages": {
      "get": {
        "security": [
          {
            "bot_token": [
              "[]"
            ]
          }
        ],
        "description": "Возвращает список сообщений в соответствии с переданными параметрами, количество записей - 1000, если переданы оба параметра since и until или только until, то список будет отсортирован в обратном порядке",
        "tags": [
          "Bot API"
        ],
        "summary": "Получение списка сообщений",
        "operationId": "b_ListMessages",
        "parameters": [
          {
            "type": "array",
            "items": {
              "minimum": 1,
              "type": "integer",
              "format": "int64"
            },
            "x-go-name": "ID",
            "description": "Массив идентификаторов сообщений",
            "name": "id",
            "in": "query"
          },
          {
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "ChatID",
            "description": "Идентификатор чата",
            "name": "chat_id",
            "in": "query"
          },
          {
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "UserID",
            "description": "Идентификатор менеджера",
            "name": "user_id",
            "in": "query"
          },
          {
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "CustomerID",
            "description": "Идентификатор клиента",
            "name": "customer_id",
            "in": "query"
          },
          {
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "BotID",
            "description": "Идентификатор бота",
            "name": "bot_id",
            "in": "query"
          },
          {
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "DialogID",
            "description": "Идентификатор диалога",
            "name": "dialog_id",
            "in": "query"
          },
          {
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "ChannelID",
            "description": "Идентификатор канала коммуникации",
            "name": "channel_id",
            "in": "query"
          },
          {
            "enum": [
              "telegram",
              "fbmessenger",
              "viber",
              "whatsapp",
              "skype",
              "vk",
              "instagram",
              "consultant",
              "yandex_chat",
              "custom"
            ],
            "type": "string",
            "x-go-name": "ChannelType",
            "description": "Тип канала коммуникации",
            "name": "channel_type",
            "in": "query"
          },
          {
            "enum": [
              "text",
              "system",
              "file",
              "image",
              "order",
              "product",
              "command"
            ],
            "type": "string",
            "x-go-name": "Type",
            "description": "Тип сообщения",
            "name": "type",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "x-go-name": "Since",
            "description": "Изменен начиная с даты/время",
            "name": "since",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "x-go-name": "Until",
            "description": "Изменен вплоть до даты/время",
            "name": "until",
            "in": "query"
          },
          {
            "enum": [
              "public",
              "private"
            ],
            "type": "string",
            "x-go-name": "Scope",
            "description": "Область видимости сообщения",
            "name": "scope",
            "in": "query"
          },
          {
            "maximum": 1000,
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "Limit",
            "description": "Максимальное количество объектов в ответе",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/listMessagesResponse"
          },
          "400": {
            "$ref": "#/responses/apiErrorResponse"
          },
          "500": {
            "description": ""
          }
        }
      },
      "post": {
        "security": [
          {
            "bot_token": [
              "[]"
            ]
          }
        ],
        "description": "Отправляет сообщение",
        "tags": [
          "Bot API"
        ],
        "summary": "Отправка сообщения",
        "operationId": "b_SendMessage",
        "parameters": [
          {
            "name": "Body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/SendMessageRequest"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/sendMessageResponse"
          },
          "400": {
            "$ref": "#/responses/apiErrorResponse"
          },
          "403": {
            "description": ""
          },
          "500": {
            "description": ""
          }
        }
      }
    },
    "/messages/{message_id}": {
      "delete": {
        "security": [
          {
            "bot_token": [
              "[]"
            ]
          }
        ],
        "description": "Удаляет созданное сообщения в случае, если канал поддерживает такую операцию",
        "tags": [
          "Bot API"
        ],
        "summary": "Удаление сообщения",
        "operationId": "b_DeleteMessage",
        "parameters": [
          {
            "type": "integer",
            "format": "int64",
            "x-go-name": "MessageId",
            "description": "Идентификатор сообщения",
            "name": "message_id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": ""
          },
          "400": {
            "$ref": "#/responses/apiErrorResponse"
          },
          "403": {
            "description": ""
          },
          "500": {
            "description": ""
          }
        }
      },
      "patch": {
        "security": [
          {
            "bot_token": [
              "[]"
            ]
          }
        ],
        "description": "Изменяет созданное сообщение в случае, если канал поддерживает такую операцию",
        "tags": [
          "Bot API"
        ],
        "summary": "Редактирование сообщения",
        "operationId": "b_editMessage",
        "parameters": [
          {
            "type": "integer",
            "format": "int64",
            "x-go-name": "MessageId",
            "description": "Идентификатор сообщения",
            "name": "message_id",
            "in": "path",
            "required": true
          },
          {
            "name": "Body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/EditMessageRequest"
            }
          }
        ],
        "responses": {
          "200": {
            "description": ""
          },
          "400": {
            "$ref": "#/responses/apiErrorResponse"
          },
          "403": {
            "description": ""
          },
          "500": {
            "description": ""
          }
        }
      }
    },
    "/my/commands": {
      "get": {
        "security": [
          {
            "bot_token": [
              "[]"
            ]
          }
        ],
        "description": "Возвращает список команд бота в соответствии с переданными параметрами, количество записей - 1000, если переданы оба параметра since и until или только until, то список будет отсортирован в обратном порядке",
        "tags": [
          "Bot API"
        ],
        "summary": "Получение списка команд бота",
        "operationId": "b_GetCommands",
        "parameters": [
          {
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "ID",
            "description": "Идентификатор команды",
            "name": "id",
            "in": "query"
          },
          {
            "maxLength": 32,
            "type": "string",
            "x-go-name": "Name",
            "description": "Наименование команды",
            "name": "name",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "x-go-name": "Since",
            "description": "Изменен начиная с даты/время",
            "name": "since",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "x-go-name": "Until",
            "description": "Изменен вплоть до даты/время",
            "name": "until",
            "in": "query"
          },
          {
            "maximum": 1000,
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "Limit",
            "description": "Максимальное количество элементов в ответе",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/getCommandsResponse"
          },
          "400": {
            "$ref": "#/responses/apiErrorResponse"
          },
          "500": {
            "description": ""
          }
        }
      }
    },
    "/my/commands/{command_name}": {
      "put": {
        "security": [
          {
            "bot_token": [
              "[]"
            ]
          }
        ],
        "description": "Создает или редактирует существующую команду бота",
        "tags": [
          "Bot API"
        ],
        "summary": "Создание/редактирование команды",
        "operationId": "b_SetCommand",
        "parameters": [
          {
            "type": "string",
            "x-go-name": "CommandName",
            "description": "Наименование команды",
            "name": "command_name",
            "in": "path",
            "required": true
          },
          {
            "name": "Body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/UpdateCommandRequest"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/setCommandResponse"
          },
          "400": {
            "$ref": "#/responses/apiErrorResponse"
          },
          "500": {
            "description": ""
          }
        }
      },
      "delete": {
        "security": [
          {
            "bot_token": [
              "[]"
            ]
          }
        ],
        "description": "Удаляет существующую команду",
        "tags": [
          "Bot API"
        ],
        "summary": "Удаление команды",
        "operationId": "b_DeleteCommand",
        "parameters": [
          {
            "type": "string",
            "x-go-name": "CommandName",
            "description": "Наименование команды",
            "name": "command_name",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": ""
          },
          "400": {
            "$ref": "#/responses/apiErrorResponse"
          },
          "500": {
            "description": ""
          }
        }
      }
    },
    "/my/info": {
      "patch": {
        "security": [
          {
            "bot_token": [
              "[]"
            ]
          }
        ],
        "description": "Обновляет информацию о текущем боте",
        "tags": [
          "Bot API"
        ],
        "summary": "Обновление информации о боте",
        "operationId": "b_UpdateSelf",
        "parameters": [
          {
            "name": "Body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/UpdateBotRequest"
            }
          }
        ],
        "responses": {
          "200": {
            "description": ""
          },
          "400": {
            "$ref": "#/responses/apiErrorResponse"
          },
          "500": {
            "description": ""
          }
        }
      }
    },
    "/users": {
      "get": {
        "security": [
          {
            "bot_token": [
              "[]"
            ]
          }
        ],
        "description": "Возвращает список менеджеров в соответствии с переданными параметрами, количество записей - 1000, если переданы оба параметра since и until или только until, то список будет отсортирован в обратном порядке",
        "tags": [
          "Bot API"
        ],
        "summary": "Получение списка менеджеров",
        "operationId": "b_ListUsers",
        "parameters": [
          {
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "ID",
            "description": "Идентификатор бота",
            "name": "id",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "x-go-name": "Since",
            "description": "Изменен начиная с даты/время",
            "name": "since",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "x-go-name": "Until",
            "description": "Изменен вплоть до даты/время",
            "name": "until",
            "in": "query"
          },
          {
            "type": "string",
            "x-go-name": "ExternalID",
            "description": "Внешний идентификатор менеджера",
            "name": "external_id",
            "in": "query"
          },
          {
            "type": "string",
            "x-go-name": "Active",
            "description": "Признак активности менеджера",
            "name": "active",
            "in": "query"
          },
          {
            "type": "string",
            "x-go-name": "Online",
            "description": "Признак нахождения менеджера в сети",
            "name": "online",
            "in": "query"
          },
          {
            "maximum": 1000,
            "minimum": 1,
            "type": "integer",
            "format": "int64",
            "x-go-name": "Limit",
            "description": "Максимальное количество записей в ответе",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/listUsersResponse"
          },
          "400": {
            "$ref": "#/responses/apiErrorResponse"
          },
          "500": {
            "description": ""
          }
        }
      }
    },
    "/ws": {
      "get": {
        "security": [
          {
            "bot_token": [
              "[]"
            ]
          }
        ],
        "description": "Данный url используется для открытия соединения с использованием веб-сокета, используя данное соединение бот сможет получать данные по каждому типу событий, на которые он подписан, перечень событий передается в виде строки, значения разделены запятой",
        "schemes": [
          "wss"
        ],
        "tags": [
          "Bot API"
        ],
        "summary": "Открытие веб-сокета",
        "operationId": "b_WS",
        "parameters": [
          {
            "enum": [
              "message_new",
              "message_updated",
              "message_deleted",
              "dialog_opened",
              "dialog_closed",
              "dialog_assign",
              "chat_created",
              "chat_updated",
              "chats_deleted",
              "user_joined_chat",
              "user_left_chat",
              "user_updated",
              "user_online_updated"
            ],
            "type": "array",
            "items": {
              "type": "string"
            },
            "example": "[message_new,chat_updated,user_joined_chat]",
            "x-go-name": "Events",
            "description": "Код события",
            "name": "events",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "description": ""
          },
          "400": {
            "$ref": "#/responses/apiErrorResponse"
          },
          "500": {
            "description": ""
          }
        }
      }
    }
  },
  "definitions": {
    "AssignResponse": {
      "type": "object",
      "properties": {
        "is_reassign": {
          "description": "Признак переназначения",
          "type": "boolean",
          "x-go-name": "IsReAssign",
          "example": true
        },
        "left_user_id": {
          "description": "Идентификатор предыдущего назначенного менеджера",
          "type": "integer",
          "format": "int64",
          "x-go-name": "LeftUserID",
          "example": 43
        },
        "previous_responsible": {
          "$ref": "#/definitions/Responsible"
        },
        "responsible": {
          "$ref": "#/definitions/Responsible"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "BotEvents": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "x-go-package": "mgnode/database/types"
    },
    "BotListItemResponse": {
      "type": "object",
      "properties": {
        "avatar_url": {
          "description": "URL аватара",
          "type": "string",
          "x-go-name": "AvatarUrl",
          "example": "https://avatar.demo/avatar-url"
        },
        "client_id": {
          "description": "Идентификатор подключения",
          "type": "string",
          "x-go-name": "ClientID",
          "example": "demo-bot-id"
        },
        "created_at": {
          "description": "Дата/время создания",
          "type": "string",
          "format": "date-time",
          "x-go-name": "CreatedAt"
        },
        "deactivated_at": {
          "description": "Дата/время деактивации",
          "type": "string",
          "format": "date-time",
          "x-go-name": "DeactivatedAt"
        },
        "events": {
          "$ref": "#/definitions/BotEvents"
        },
        "id": {
          "description": "Идентификатор бота",
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID",
          "example": 4
        },
        "is_active": {
          "description": "Флаг активности",
          "type": "boolean",
          "x-go-name": "IsActive",
          "example": true
        },
        "is_self": {
          "description": "Признак текущего бота",
          "type": "boolean",
          "x-go-name": "IsSelf",
          "example": true
        },
        "is_system": {
          "description": "Флаг системного бота",
          "type": "boolean",
          "x-go-name": "IsSystem",
          "example": false
        },
        "name": {
          "description": "Наименование бота",
          "type": "string",
          "x-go-name": "Name",
          "example": "demo-bot"
        },
        "roles": {
          "$ref": "#/definitions/BotRoles"
        },
        "updated_at": {
          "description": "Дата/время последнего изменения",
          "type": "string",
          "format": "date-time",
          "x-go-name": "UpdatedAt"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "BotRoles": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "x-go-package": "mgnode/database/types"
    },
    "Channel": {
      "type": "object",
      "properties": {
        "avatar": {
          "description": "Аватар канала",
          "type": "string",
          "x-go-name": "Avatar",
          "example": "https://avatar.demo/demo-avatar"
        },
        "id": {
          "description": "Идентификатор канала",
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID",
          "example": 4
        },
        "is_active": {
          "description": "Признак активности канала",
          "type": "boolean",
          "x-go-name": "IsActive",
          "example": true
        },
        "name": {
          "description": "Наименование канала",
          "type": "string",
          "x-go-name": "Name",
          "example": "demo-telegram"
        },
        "settings": {
          "$ref": "#/definitions/ChannelSettings"
        },
        "transport_id": {
          "description": "Идентификатор транспорта канала",
          "type": "integer",
          "format": "int64",
          "x-go-name": "TransportID",
          "example": 65
        },
        "type": {
          "description": "Тип канала",
          "type": "string",
          "enum": [
            "telegram",
            "fbmessenger",
            "viber",
            "whatsapp",
            "skype",
            "vk",
            "instagram",
            "consultant",
            "yandex_chat",
            "custom"
          ],
          "x-go-name": "Type",
          "example": "instagram"
        }
      },
      "x-go-package": "mgnode/response"
    },
    "ChannelListItemResponse": {
      "type": "object",
      "properties": {
        "activated_at": {
          "description": "Дата активации канала",
          "type": "string",
          "format": "date-time",
          "x-go-name": "ActivatedAt"
        },
        "created_at": {
          "description": "Дата создания канала",
          "type": "string",
          "format": "date-time",
          "x-go-name": "CreatedAt"
        },
        "deactivated_at": {
          "description": "Дата деактивации канала",
          "type": "string",
          "format": "date-time",
          "x-go-name": "DeactivatedAt"
        },
        "id": {
          "description": "Идентификатор канала",
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID",
          "example": 4
        },
        "is_active": {
          "description": "Признак активности канала",
          "type": "boolean",
          "x-go-name": "IsActive",
          "example": true
        },
        "name": {
          "description": "Наименование канала",
          "type": "string",
          "x-go-name": "Name",
          "example": "demo-channel"
        },
        "settings": {
          "$ref": "#/definitions/ChannelSettings"
        },
        "type": {
          "description": "Тип канала",
          "type": "string",
          "enum": [
            "telegram",
            "fbmessenger",
            "viber",
            "whatsapp",
            "skype",
            "vk",
            "instagram",
            "consultant",
            "yandex_chat",
            "custom"
          ],
          "x-go-name": "Type",
          "example": "telegram"
        },
        "updated_at": {
          "description": "Дата последнего обновления канала",
          "type": "string",
          "format": "date-time",
          "x-go-name": "UpdatedAt"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "ChannelSettings": {
      "type": "object",
      "properties": {
        "audio": {
          "description": "Поддержка аудио сообщений",
          "type": "object",
          "properties": {
            "creating": {
              "description": "Поддержка создания аудио сообщений",
              "type": "string",
              "enum": [
                "none",
                "receive",
                "send",
                "both"
              ],
              "x-go-name": "Creating",
              "example": "none"
            },
            "deleting": {
              "description": "Поддержка удаления аудио сообщений",
              "type": "string",
              "enum": [
                "none",
                "receive",
                "send",
                "both"
              ],
              "x-go-name": "Deleting",
              "example": "none"
            },
            "max_items_count": {
              "description": "Максимальное количество аудио вложений в сообщение",
              "type": "integer",
              "format": "int64",
              "x-go-name": "MaxItemsCount"
            },
            "quoting": {
              "description": "Поддержка цитирования аудио сообщений",
              "type": "string",
              "enum": [
                "none",
                "receive",
                "send",
                "both"
              ],
              "x-go-name": "Quoting",
              "example": "none"
            }
          },
          "x-go-name": "Audio"
        },
        "customer_external_id": {
          "description": "Поддержка внешних идентификаторов клиента",
          "type": "string",
          "enum": [
            "any",
            "phone"
          ],
          "x-go-name": "CustomerExternalID",
          "example": "phone"
        },
        "file": {
          "description": "Поддержка файловых сообщений",
          "type": "object",
          "properties": {
            "creating": {
              "description": "Поддержка создания файловых сообщений",
              "type": "string",
              "enum": [
                "none",
                "receive",
                "send",
                "both"
              ],
              "x-go-name": "Creating",
              "example": "both"
            },
            "deleting": {
              "description": "Поддержка удаления файловых сообщений",
              "type": "string",
              "enum": [
                "none",
                "receive",
                "send",
                "both"
              ],
              "x-go-name": "Deleting",
              "example": "both"
            },
            "editing": {
              "description": "Поддержка редактирования файловых сообщений",
              "type": "string",
              "enum": [
                "none",
                "receive",
                "send",
                "both"
              ],
              "x-go-name": "Editing",
              "example": "both"
            },
            "max_items_count": {
              "description": "Максимальное количество файловых вложений в сообщение",
              "type": "integer",
              "format": "int64",
              "x-go-name": "MaxItemsCount"
            },
            "note_max_chars_count": {
              "description": "Максимальное число символов в аннотации к файловому сообщению",
              "type": "integer",
              "format": "uint16",
              "x-go-name": "NoteMaxCharsCount"
            },
            "quoting": {
              "description": "Поддержка цитирования файловых сообщений",
              "type": "string",
              "enum": [
                "none",
                "receive",
                "send",
                "both"
              ],
              "x-go-name": "Quoting",
              "example": "both"
            }
          },
          "x-go-name": "File"
        },
        "image": {
          "description": "Поддержка медиа сообщений",
          "type": "object",
          "properties": {
            "creating": {
              "description": "Поддержка создания медиа сообщений",
              "type": "string",
              "enum": [
                "none",
                "receive",
                "send",
                "both"
              ],
              "x-go-name": "Creating",
              "example": "both"
            },
            "deleting": {
              "description": "Поддержка удаления медиа сообщений",
              "type": "string",
              "enum": [
                "none",
                "receive",
                "send",
                "both"
              ],
              "x-go-name": "Deleting",
              "example": "both"
            },
            "editing": {
              "description": "Поддержка редактирования медиа сообщений",
              "type": "string",
              "enum": [
                "none",
                "receive",
                "send",
                "both"
              ],
              "x-go-name": "Editing",
              "example": "both"
            },
            "max_items_count": {
              "description": "Максимальное количество медиа вложений в сообщение",
              "type": "integer",
              "format": "int64",
              "x-go-name": "MaxItemsCount"
            },
            "note_max_chars_count": {
              "description": "Максимальное число символов в аннотации к медиа сообщению",
              "type": "integer",
              "format": "uint16",
              "x-go-name": "NoteMaxCharsCount"
            },
            "quoting": {
              "description": "Поддержка цитирования медиа сообщений",
              "type": "string",
              "enum": [
                "none",
                "receive",
                "send",
                "both"
              ],
              "x-go-name": "Quoting",
              "example": "both"
            }
          },
          "x-go-name": "Image"
        },
        "order": {
          "description": "Поддержка сообщений с заказом",
          "type": "object",
          "properties": {
            "creating": {
              "description": "Поддержка создания сообщений с заказом",
              "type": "string",
              "enum": [
                "none",
                "receive",
                "send",
                "both"
              ],
              "x-go-name": "Creating",
              "example": "both"
            },
            "deleting": {
              "description": "Поддержка удаления сообщений с заказом",
              "type": "string",
              "enum": [
                "none",
                "receive",
                "send",
                "both"
              ],
              "x-go-name": "Deleting",
              "example": "send"
            },
            "editing": {
              "description": "Поддержка редактирования сообщений с заказом",
              "type": "string",
              "enum": [
                "none",
                "receive",
                "send",
                "both"
              ],
              "x-go-name": "Editing",
              "example": "send"
            }
          },
          "x-go-name": "Order"
        },
        "product": {
          "description": "Поддержка сообщений с товаром",
          "type": "object",
          "properties": {
            "creating": {
              "description": "Поддержка создания сообщений с товаром",
              "type": "string",
              "enum": [
                "none",
                "receive",
                "send",
                "both"
              ],
              "x-go-name": "Creating",
              "example": "none"
            },
            "deleting": {
              "description": "Поддержка удаления сообщений с товаром",
              "type": "string",
              "enum": [
                "none",
                "receive",
                "send",
                "both"
              ],
              "x-go-name": "Deleting",
              "example": "send"
            },
            "editing": {
              "description": "Поддержка редактирования сообщений с товаром",
              "type": "string",
              "enum": [
                "none",
                "receive",
                "send",
                "both"
              ],
              "x-go-name": "Editing",
              "example": "none"
            }
          },
          "x-go-name": "Product"
        },
        "sending_policy": {
          "description": "Политика отправки сообщения",
          "type": "object",
          "properties": {
            "after_reply_timeout": {
              "description": "Типы сообщений для отправки после истечения срока ответа",
              "type": "string",
              "enum": [
                "no",
                "template"
              ],
              "x-go-name": "AfterReplyTimeout",
              "example": "no"
            },
            "new_customer": {
              "description": "Типы сообщений для отправки новому клиенту",
              "type": "string",
              "enum": [
                "no",
                "template",
                "text"
              ],
              "x-go-name": "NewCustomer",
              "example": "template"
            },
            "outgoing": {
              "description": "Поддержка исходящих сообщений",
              "type": "string",
              "enum": [
                "allowed",
                "restricted"
              ],
              "x-go-name": "Outgoing",
              "example": "text"
            }
          },
          "x-go-name": "SendingPolicy"
        },
        "status": {
          "description": "Передача информации о статусе сообщения",
          "type": "object",
          "properties": {
            "delivered": {
              "description": "Поддержка каналом передачи информации о доставке сообщения",
              "type": "string",
              "enum": [
                "none",
                "receive",
                "send",
                "both"
              ],
              "x-go-name": "Delivered",
              "example": "receive"
            },
            "read": {
              "description": "Поддержка каналом передачи информации о прочтении сообщения",
              "type": "string",
              "enum": [
                "none",
                "receive",
                "send",
                "both"
              ],
              "x-go-name": "Read",
              "example": "both"
            }
          },
          "x-go-name": "Status"
        },
        "suggestions": {
          "description": "Поддержка типов быстрых ответов",
          "type": "object",
          "properties": {
            "email": {
              "description": "Поддержка отправки email в быстрых ответах",
              "type": "string",
              "enum": [
                "none",
                "receive",
                "send",
                "both"
              ],
              "x-go-name": "Email",
              "example": "none"
            },
            "phone": {
              "description": "Поддержка отправки номера телефона в быстрых ответах",
              "type": "string",
              "enum": [
                "none",
                "receive",
                "send",
                "both"
              ],
              "x-go-name": "Phone",
              "example": "none"
            },
            "text": {
              "description": "Поддержка отправки текста в быстрых ответах",
              "type": "string",
              "enum": [
                "none",
                "receive",
                "send",
                "both"
              ],
              "x-go-name": "Text",
              "example": "receive"
            }
          },
          "x-go-name": "Suggestions"
        },
        "text": {
          "description": "Поддержка текстовых сообщений",
          "type": "object",
          "properties": {
            "creating": {
              "description": "Поддержка создания текстовых сообщений",
              "type": "string",
              "enum": [
                "none",
                "receive",
                "send",
                "both"
              ],
              "x-go-name": "Creating",
              "example": "none"
            },
            "deleting": {
              "description": "Поддержка удаления текстовых сообщений",
              "type": "string",
              "enum": [
                "none",
                "receive",
                "send",
                "both"
              ],
              "x-go-name": "Deleting",
              "example": "none"
            },
            "editing": {
              "description": "Поддержка редактирования текстовых сообщений",
              "type": "string",
              "enum": [
                "none",
                "receive",
                "send",
                "both"
              ],
              "x-go-name": "Editing",
              "example": "both"
            },
            "max_chars_count": {
              "description": "Максимальное количество символов текстового сообщения",
              "type": "integer",
              "format": "uint16",
              "x-go-name": "MaxCharsCount"
            },
            "quoting": {
              "description": "Поддержка цитирования текстовых сообщений",
              "type": "string",
              "enum": [
                "none",
                "receive",
                "send",
                "both"
              ],
              "x-go-name": "Quoting",
              "example": "send"
            }
          },
          "x-go-name": "Text"
        }
      },
      "x-go-package": "mgnode/model"
    },
    "ChatListItemResponse": {
      "type": "object",
      "properties": {
        "author_id": {
          "description": "Идентификатор автора",
          "type": "integer",
          "format": "int64",
          "x-go-name": "AuthorID",
          "example": 5
        },
        "avatar": {
          "description": "URL аватара",
          "type": "string",
          "x-go-name": "Avatar",
          "example": "https://avatar.demo/demo-avatar"
        },
        "channel": {
          "$ref": "#/definitions/Channel"
        },
        "created_at": {
          "description": "Дата и время создания",
          "type": "string",
          "format": "date-time",
          "x-go-name": "CreatedAt"
        },
        "customer": {
          "$ref": "#/definitions/UserRef"
        },
        "id": {
          "description": "Идентификатор чата",
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID",
          "example": 4
        },
        "last_activity": {
          "description": "Дата и время последней активности",
          "type": "string",
          "format": "date-time",
          "x-go-name": "LastActivity"
        },
        "last_dialog": {
          "$ref": "#/definitions/Dialog"
        },
        "last_message": {
          "$ref": "#/definitions/Message"
        },
        "members": {
          "description": "Список участников чата",
          "type": "array",
          "items": {
            "$ref": "#/definitions/Member"
          },
          "x-go-name": "Members"
        },
        "name": {
          "description": "Наименование чата",
          "type": "string",
          "x-go-name": "Name",
          "example": "John Doe"
        },
        "not_read_messages": {
          "description": "Количество непрочитанных сообщений",
          "type": "integer",
          "format": "int64",
          "x-go-name": "NotReadMessagesCount",
          "example": 5
        },
        "reply_deadline": {
          "description": "Крайнее время ответа",
          "type": "string",
          "format": "date-time",
          "x-go-name": "ReplyDeadline"
        },
        "unread": {
          "description": "Признак непрочитанного чата",
          "type": "boolean",
          "x-go-name": "Unread",
          "example": true
        },
        "updated_at": {
          "description": "Дата и время последнего обновления",
          "type": "string",
          "format": "date-time",
          "x-go-name": "UpdatedAt"
        },
        "waiting_level": {
          "description": "Уровень ожидания",
          "type": "string",
          "enum": [
            "warning",
            "danger",
            "none"
          ],
          "x-go-name": "WaitingLevel"
        },
        "waiting_level_transition_time": {
          "description": "Время перехода на следующий уровень ожидания",
          "type": "string",
          "format": "date-time",
          "x-go-name": "WaitingLevelTrTime"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "ChatMemberListItemResponse": {
      "type": "object",
      "properties": {
        "chat_id": {
          "description": "Идентификатор чата",
          "type": "integer",
          "format": "int64",
          "x-go-name": "ChatID",
          "example": 4
        },
        "created_at": {
          "description": "Дата и время создания",
          "type": "string",
          "format": "date-time",
          "x-go-name": "CreatedAt"
        },
        "id": {
          "description": "Идентификатор участника чата",
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID",
          "example": 4
        },
        "is_author": {
          "description": "Признак авторства",
          "type": "boolean",
          "x-go-name": "IsAuthor",
          "example": true
        },
        "state": {
          "description": "Состояние",
          "type": "string",
          "enum": [
            "active",
            "kicked",
            "leaved"
          ],
          "x-go-name": "State",
          "example": "kicked"
        },
        "updated_at": {
          "description": "Дата/время последнего изменения",
          "type": "string",
          "format": "date-time",
          "x-go-name": "UpdatedAt"
        },
        "user_id": {
          "description": "Идентификатор пользователя",
          "type": "integer",
          "format": "int64",
          "x-go-name": "UserID",
          "example": 56
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "CommandResponse": {
      "type": "object",
      "properties": {
        "created_at": {
          "description": "Дата/время создания",
          "type": "string",
          "format": "date-time",
          "x-go-name": "CreatedAt"
        },
        "description": {
          "description": "Описание команды",
          "type": "string",
          "x-go-name": "Description",
          "example": "demo-description"
        },
        "id": {
          "description": "Идентификатор команды",
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID",
          "example": 95
        },
        "name": {
          "description": "Наименование команды",
          "type": "string",
          "x-go-name": "Name",
          "example": "demo-name"
        },
        "updated_at": {
          "description": "Дата/время последнего изменения",
          "type": "string",
          "format": "date-time",
          "x-go-name": "UpdatedAt"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "Cost": {
      "type": "object",
      "properties": {
        "currency": {
          "description": "Код валюты",
          "type": "string",
          "x-go-name": "Currency"
        },
        "value": {
          "description": "Числовое значение стоимости",
          "type": "number",
          "format": "double",
          "minimum": 0,
          "x-go-name": "Value",
          "example": 256
        }
      },
      "x-go-package": "mgnode/model"
    },
    "CustomerResponse": {
      "type": "object",
      "properties": {
        "avatar_url": {
          "description": "URL аватара",
          "type": "string",
          "x-go-name": "Avatar",
          "example": "https://avatar.demo/demo-avatar"
        },
        "channel_id": {
          "description": "Идентификатор канала",
          "type": "integer",
          "format": "int64",
          "x-go-name": "ChannelId",
          "example": 5
        },
        "country": {
          "description": "Страна",
          "type": "string",
          "x-go-name": "Country",
          "example": "US"
        },
        "created_at": {
          "description": "Дата и время создания",
          "type": "string",
          "format": "date-time",
          "x-go-name": "CreatedAt"
        },
        "email": {
          "description": "Email клиента",
          "type": "string",
          "x-go-name": "Email",
          "example": "demo@customer.demo"
        },
        "external_id": {
          "description": "Внешний идентификатор клиента",
          "type": "string",
          "x-go-name": "ExternalID",
          "example": "e3456"
        },
        "first_name": {
          "description": "Имя клиента",
          "type": "string",
          "x-go-name": "FirstName",
          "example": "Thomas"
        },
        "id": {
          "description": "Идентификатор клиента",
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID",
          "example": 4
        },
        "is_blocked": {
          "description": "Признак блокировки",
          "type": "boolean",
          "x-go-name": "IsBlocked",
          "example": true
        },
        "language": {
          "description": "Выбранная локаль",
          "type": "string",
          "x-go-name": "Language",
          "example": "en_US"
        },
        "last_name": {
          "description": "Фамилия клиента",
          "type": "string",
          "x-go-name": "LastName",
          "example": "Smith"
        },
        "phone": {
          "description": "Телефон",
          "type": "string",
          "x-go-name": "Phone",
          "example": "928-970-2685"
        },
        "profile_url": {
          "description": "URL профиля",
          "type": "string",
          "x-go-name": "ProfileURL",
          "example": "https://profile.demo/demo-profile"
        },
        "revoked_at": {
          "description": "Дата/время отзыва регистрации",
          "type": "string",
          "format": "date-time",
          "x-go-name": "RevokedAt"
        },
        "updated_at": {
          "description": "Дата/время последнего изменения",
          "type": "string",
          "format": "date-time",
          "x-go-name": "UpdatedAt"
        },
        "username": {
          "description": "Никнейм пользователя",
          "type": "string",
          "x-go-name": "Username",
          "example": "demo_user"
        },
        "utm": {
          "$ref": "#/definitions/Utm"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "Dialog": {
      "type": "object",
      "properties": {
        "assigned_at": {
          "description": "Дата и время назначения диалога",
          "type": "string",
          "format": "date-time",
          "x-go-name": "AssignedAt"
        },
        "closed_at": {
          "description": "Дата и время закрытия диалога",
          "type": "string",
          "format": "date-time",
          "x-go-name": "ClosedAt"
        },
        "created_at": {
          "description": "Дата и время создания диалога",
          "type": "string",
          "format": "date-time",
          "x-go-name": "CreatedAt"
        },
        "id": {
          "description": "Идентификатор диалога",
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID",
          "example": 63
        },
        "responsible": {
          "$ref": "#/definitions/UserRef"
        }
      },
      "x-go-package": "mgnode/response"
    },
    "DialogListItemResponse": {
      "type": "object",
      "properties": {
        "begin_message_id": {
          "description": "Идентификатор первого сообщения",
          "type": "integer",
          "format": "int64",
          "x-go-name": "BeginMessageID",
          "example": 32
        },
        "bot_id": {
          "description": "Идентификатор бота",
          "type": "integer",
          "format": "int64",
          "x-go-name": "BotID",
          "example": 20
        },
        "chat_id": {
          "description": "Идентификатор чата",
          "type": "integer",
          "format": "int64",
          "x-go-name": "ChatID",
          "example": 3
        },
        "closed_at": {
          "description": "Дата/время закрытия",
          "type": "string",
          "format": "date-time",
          "x-go-name": "ClosedAt"
        },
        "created_at": {
          "description": "Дата/время создания",
          "type": "string",
          "format": "date-time",
          "x-go-name": "CreatedAt"
        },
        "ending_message_id": {
          "description": "Идентификатор последнего сообщения",
          "type": "integer",
          "format": "int64",
          "x-go-name": "EndingMessageID",
          "example": 39
        },
        "id": {
          "description": "Идентификатор диалога",
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID",
          "example": 4
        },
        "is_active": {
          "description": "Признак активности",
          "type": "boolean",
          "x-go-name": "IsActive",
          "example": false
        },
        "is_assigned": {
          "description": "Флаг назначения на менеджера или бота",
          "type": "boolean",
          "x-go-name": "IsAssigned",
          "example": true
        },
        "responsible": {
          "$ref": "#/definitions/Responsible"
        },
        "updated_at": {
          "description": "Дата/время последнего изменения",
          "type": "string",
          "format": "date-time",
          "x-go-name": "UpdatedAt"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "DialogResponsibleRequest": {
      "type": "object",
      "properties": {
        "bot_id": {
          "description": "Идентификатор бота",
          "type": "integer",
          "format": "int64",
          "minimum": 1,
          "x-go-name": "BotID",
          "example": 32
        },
        "user_id": {
          "description": "Идентификатор менеджера",
          "type": "integer",
          "format": "int64",
          "minimum": 1,
          "x-go-name": "UserID",
          "example": 43
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "DistributorDialogChannel": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "name": {
          "type": "string",
          "x-go-name": "Name"
        },
        "type": {
          "type": "string",
          "x-go-name": "Type"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "DistributorDialogChat": {
      "type": "object",
      "properties": {
        "channel": {
          "$ref": "#/definitions/DistributorDialogChannel"
        },
        "customer": {
          "$ref": "#/definitions/DistributorDialogCustomer"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "DistributorDialogCustomer": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "name": {
          "type": "string",
          "x-go-name": "Name"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "DistributorDialogItem": {
      "type": "object",
      "properties": {
        "chat": {
          "$ref": "#/definitions/DistributorDialogChat"
        },
        "chat_id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ChatID"
        },
        "closed_at": {
          "type": "string",
          "x-go-name": "ClosedAt"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "manager_answered": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ManagerAnswered"
        },
        "message": {
          "$ref": "#/definitions/DistributorDialogMessage"
        },
        "responsible": {
          "$ref": "#/definitions/DistributorDialogResponsible"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "DistributorDialogMessage": {
      "type": "object",
      "properties": {
        "from": {
          "$ref": "#/definitions/DistributorDialogUserRef"
        },
        "time": {
          "type": "string",
          "x-go-name": "Time"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "DistributorDialogParams": {
      "type": "object",
      "properties": {
        "AfterDialogID": {
          "type": "integer",
          "format": "int64"
        },
        "Limit": {
          "type": "integer",
          "format": "int64"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "DistributorDialogResponsible": {
      "type": "object",
      "properties": {
        "assigned_at": {
          "type": "string",
          "x-go-name": "AssignedAt"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "type": {
          "type": "string",
          "x-go-name": "Type"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "DistributorDialogUserRef": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "type": {
          "type": "string",
          "x-go-name": "Type"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "DistributorDialogsResult": {
      "type": "object",
      "properties": {
        "dialogs": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/DistributorDialogItem"
          },
          "x-go-name": "Dialogs"
        },
        "next_dialog_id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "NextDialogId"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "EditMessageRequest": {
      "type": "object",
      "properties": {
        "content": {
          "description": "Тело сообщения",
          "type": "string",
          "minimum": 1,
          "x-go-name": "Content",
          "example": "demo content"
        },
        "items": {
          "description": "Массив объектов вложений",
          "type": "array",
          "maxItems": 20,
          "minItems": 1,
          "items": {
            "$ref": "#/definitions/FilesMessageRequestItem"
          },
          "x-go-name": "Items"
        },
        "note": {
          "description": "Описание сообщения (только для медиа сообщений)",
          "type": "string",
          "x-go-name": "Note",
          "example": "demo note"
        },
        "order": {
          "$ref": "#/definitions/MessageOrder"
        },
        "product": {
          "$ref": "#/definitions/MessageProduct"
        },
        "quote_message_id": {
          "description": "Идентификатор цитируемого сообщения",
          "type": "integer",
          "format": "int64",
          "x-go-name": "QuoteMessageId",
          "example": 33
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "ErrorResponse": {
      "type": "object",
      "properties": {
        "errors": {
          "description": "Список ошибок",
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "Errors"
        }
      },
      "x-go-package": "mgnode/response"
    },
    "FileItem": {
      "type": "object",
      "properties": {
        "caption": {
          "description": "Текстовое описание медиа вложения",
          "type": "string",
          "x-go-name": "Caption",
          "example": "demo caption"
        },
        "duration": {
          "description": "Длительность аудио записи (только для сообщений с типом audio)",
          "type": "integer",
          "format": "int64",
          "x-go-name": "Duration",
          "example": 345
        },
        "height": {
          "description": "Высота изображения в пикселях (только для сообщений с типом image)",
          "type": "integer",
          "format": "int64",
          "x-go-name": "Height",
          "example": 1080
        },
        "histogram": {
          "description": "Диаграмма звука (только для сообщений с типом audio)",
          "type": "array",
          "items": {
            "type": "integer",
            "format": "int64"
          },
          "x-go-name": "Histogram",
          "example": [
            1,
            34,
            23,
            4,
            32,
            34,
            23,
            12,
            93,
            4
          ]
        },
        "id": {
          "description": "UUID вложенного файла",
          "type": "string",
          "format": "uuid",
          "x-go-name": "ID"
        },
        "preview_url": {
          "description": "URL файла для загрузки",
          "type": "string",
          "format": "uri",
          "x-go-name": "PreviewURL"
        },
        "size": {
          "description": "Размер вложения (в байтах)",
          "type": "integer",
          "format": "int64",
          "x-go-name": "Size",
          "example": 34534
        },
        "type": {
          "description": "Тип вложения",
          "type": "string",
          "x-go-name": "Type",
          "example": "video"
        },
        "width": {
          "description": "Ширина изображения в пикселях (только для сообщений с типом image)",
          "type": "integer",
          "format": "int64",
          "x-go-name": "Width",
          "example": 1920
        }
      },
      "x-go-package": "mgnode/response"
    },
    "FilesMessageRequestItem": {
      "type": "object",
      "properties": {
        "caption": {
          "description": "Описание вложения",
          "type": "string",
          "maxLength": 1024,
          "minLength": 1,
          "x-go-name": "Caption",
          "example": "demo caption"
        },
        "id": {
          "description": "Идентификатор вложения",
          "type": "string",
          "format": "uuid",
          "x-go-name": "ID"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "FullFileResponse": {
      "type": "object",
      "properties": {
        "Url": {
          "description": "URL для загрузки файла",
          "type": "string",
          "format": "uri"
        },
        "id": {
          "description": "UUID загруженного файла",
          "type": "string",
          "format": "uuid",
          "x-go-name": "ID"
        },
        "size": {
          "description": "Размер файла (в байтах)",
          "type": "integer",
          "format": "int64",
          "x-go-name": "Size",
          "example": 102384
        },
        "type": {
          "description": "Тип файла",
          "type": "string",
          "enum": [
            "none",
            "image",
            "video",
            "file",
            "audio"
          ],
          "x-go-name": "Type",
          "example": "image"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "ManagerResponse": {
      "type": "object",
      "properties": {
        "available": {
          "description": "Признак доступности клиента по статусу",
          "type": "boolean",
          "x-go-name": "Available",
          "example": true
        },
        "avatar_url": {
          "description": "URL аватара",
          "type": "string",
          "x-go-name": "Avatar",
          "example": "https://avatar.demo/demo-avatar"
        },
        "connected": {
          "description": "Признак нахождения в сети",
          "type": "boolean",
          "x-go-name": "Connected",
          "example": true
        },
        "created_at": {
          "description": "Дата/время создания",
          "type": "string",
          "x-go-name": "CreatedAt",
          "example": "2022-06-03T16:03:47.304342Z"
        },
        "external_id": {
          "description": "Внешний идентификатор пользователя",
          "type": "string",
          "x-go-name": "ExternalID",
          "example": "349"
        },
        "first_name": {
          "description": "Имя пользователя",
          "type": "string",
          "x-go-name": "FirstName",
          "example": "John"
        },
        "id": {
          "description": "Идентификатор менеджера",
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID",
          "example": 45
        },
        "is_active": {
          "description": "Признак активности",
          "type": "boolean",
          "x-go-name": "IsActive",
          "example": true
        },
        "is_online": {
          "description": "Признак доступности клиента",
          "type": "boolean",
          "x-go-name": "IsOnline",
          "example": true
        },
        "is_technical_account": {
          "description": "Признак технического аккаунта",
          "type": "boolean",
          "x-go-name": "IsTechnicalAccount",
          "example": false
        },
        "last_name": {
          "description": "Фамилия пользователя",
          "type": "string",
          "x-go-name": "LastName",
          "example": "Doe"
        },
        "revoked_at": {
          "description": "Дата/время отзыва регистрации",
          "type": "string",
          "x-go-name": "RevokedAt",
          "example": "2022-06-03T16:03:47.304342Z"
        },
        "updated_at": {
          "description": "Дата/время последнего изменения",
          "type": "string",
          "x-go-name": "UpdatedAt",
          "example": "2022-06-03T16:03:47.304342Z"
        },
        "username": {
          "description": "Никнейм пользователя",
          "type": "string",
          "x-go-name": "Username",
          "example": "demo-username"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "Member": {
      "type": "object",
      "properties": {
        "is_author": {
          "description": "Признак авторства чата",
          "type": "boolean",
          "x-go-name": "IsAuthor",
          "example": true
        },
        "state": {
          "description": "Состояние участника чата",
          "type": "string",
          "enum": [
            "active",
            "kicked",
            "leaved",
            "undefined"
          ],
          "x-go-name": "State",
          "example": "active"
        },
        "user": {
          "$ref": "#/definitions/UserRef"
        }
      },
      "x-go-package": "mgnode/response"
    },
    "Message": {
      "allOf": [
        {
          "$ref": "#/definitions/TextMessage"
        },
        {
          "$ref": "#/definitions/SystemMessage"
        },
        {
          "type": "object",
          "properties": {
            "actions": {
              "description": "Действия, доступные для данного сообщения",
              "type": "array",
              "items": {
                "type": "string"
              },
              "x-go-name": "Actions"
            },
            "chat_id": {
              "description": "Идентификатор чата",
              "type": "integer",
              "format": "int64",
              "x-go-name": "ChatID",
              "example": 56
            },
            "error": {
              "$ref": "#/definitions/MessageError"
            },
            "from": {
              "$ref": "#/definitions/UserRef"
            },
            "id": {
              "description": "Идентификатор сообщения",
              "type": "integer",
              "format": "int64",
              "x-go-name": "ID",
              "example": 45
            },
            "is_edit": {
              "description": "Признак редактирования сообщения",
              "type": "boolean",
              "x-go-name": "IsEdit",
              "example": false
            },
            "is_read": {
              "description": "Признак прочтения сообщения",
              "type": "boolean",
              "x-go-name": "IsRead",
              "example": true
            },
            "items": {
              "description": "Объекты медиа данных (для медиа сообщений)",
              "type": "array",
              "items": {
                "$ref": "#/definitions/FileItem"
              },
              "x-go-name": "Items"
            },
            "note": {
              "description": "Аннотация к медиа данным (для медиа сообщения)",
              "type": "string",
              "x-go-name": "Note",
              "example": "demo note"
            },
            "order": {
              "$ref": "#/definitions/MessageOrder"
            },
            "product": {
              "$ref": "#/definitions/MessageProduct"
            },
            "scope": {
              "description": "Область видимости сообщения",
              "type": "string",
              "enum": [
                "undefined",
                "public",
                "private"
              ],
              "x-go-name": "Scope",
              "example": "public"
            },
            "status": {
              "description": "Статус сообщения",
              "type": "string",
              "enum": [
                "undefined",
                "received",
                "sending",
                "sent",
                "failed",
                "delivered",
                "seen"
              ],
              "x-go-name": "Status"
            },
            "time": {
              "description": "Время создания сообщения",
              "type": "string",
              "format": "date-time",
              "x-go-name": "Time"
            },
            "transport_attachments": {
              "$ref": "#/definitions/MessageTransportAttachments"
            },
            "type": {
              "description": "Тип сообщения",
              "type": "string",
              "enum": [
                "text",
                "system",
                "command",
                "order",
                "product",
                "file",
                "image",
                "audio"
              ],
              "x-go-name": "Type",
              "example": "text"
            }
          }
        },
        {
          "$ref": "#/definitions/TextMessage"
        },
        {
          "$ref": "#/definitions/SystemMessage"
        },
        {
          "type": "object",
          "properties": {
            "actions": {
              "description": "Действия, доступные для данного сообщения",
              "type": "array",
              "items": {
                "type": "string"
              },
              "x-go-name": "Actions"
            },
            "chat_id": {
              "description": "Идентификатор чата",
              "type": "integer",
              "format": "int64",
              "x-go-name": "ChatID",
              "example": 56
            },
            "error": {
              "$ref": "#/definitions/MessageError"
            },
            "from": {
              "$ref": "#/definitions/UserRef"
            },
            "id": {
              "description": "Идентификатор сообщения",
              "type": "integer",
              "format": "int64",
              "x-go-name": "ID",
              "example": 45
            },
            "is_edit": {
              "description": "Признак редактирования сообщения",
              "type": "boolean",
              "x-go-name": "IsEdit",
              "example": false
            },
            "is_read": {
              "description": "Признак прочтения сообщения",
              "type": "boolean",
              "x-go-name": "IsRead",
              "example": true
            },
            "items": {
              "description": "Объекты медиа данных (для медиа сообщений)",
              "type": "array",
              "items": {
                "$ref": "#/definitions/FileItem"
              },
              "x-go-name": "Items"
            },
            "note": {
              "description": "Аннотация к медиа данным (для медиа сообщения)",
              "type": "string",
              "x-go-name": "Note",
              "example": "demo note"
            },
            "order": {
              "$ref": "#/definitions/MessageOrder"
            },
            "product": {
              "$ref": "#/definitions/MessageProduct"
            },
            "scope": {
              "description": "Область видимости сообщения",
              "type": "string",
              "enum": [
                "undefined",
                "public",
                "private"
              ],
              "x-go-name": "Scope",
              "example": "public"
            },
            "status": {
              "description": "Статус сообщения",
              "type": "string",
              "enum": [
                "undefined",
                "received",
                "sending",
                "sent",
                "failed",
                "delivered",
                "seen"
              ],
              "x-go-name": "Status"
            },
            "time": {
              "description": "Время создания сообщения",
              "type": "string",
              "format": "date-time",
              "x-go-name": "Time"
            },
            "transport_attachments": {
              "$ref": "#/definitions/MessageTransportAttachments"
            },
            "type": {
              "description": "Тип сообщения",
              "type": "string",
              "enum": [
                "text",
                "system",
                "command",
                "order",
                "product",
                "file",
                "image",
                "audio"
              ],
              "x-go-name": "Type",
              "example": "text"
            }
          }
        }
      ],
      "x-go-package": "mgnode/response"
    },
    "MessageError": {
      "type": "object",
      "properties": {
        "code": {
          "description": "Код ошибки",
          "type": "string",
          "enum": [
            "unknown",
            "network_error",
            "malformed_response",
            "async_send_timeout",
            "general",
            "customer_not_exists",
            "reply_timed_out",
            "spam_suspicion",
            "access_restricted"
          ],
          "x-go-name": "Code"
        },
        "message": {
          "description": "Текстовое описание ошибки",
          "type": "string",
          "x-go-name": "Message",
          "example": "error malformed response"
        }
      },
      "x-go-package": "mgnode/response"
    },
    "MessageOrder": {
      "type": "object",
      "properties": {
        "cost": {
          "$ref": "#/definitions/Cost"
        },
        "date": {
          "description": "Дата создания заказа",
          "type": "string",
          "format": "date-time",
          "x-go-name": "Date"
        },
        "delivery": {
          "$ref": "#/definitions/MessageOrderDelivery"
        },
        "discount": {
          "$ref": "#/definitions/Cost"
        },
        "external_id": {
          "description": "Внешний идентификатор заказа",
          "type": "integer",
          "format": "int64",
          "x-go-name": "ExternalID",
          "example": 56
        },
        "items": {
          "description": "Массив товаров заказа",
          "type": "array",
          "items": {
            "$ref": "#/definitions/MessageOrderItem"
          },
          "x-go-name": "Items"
        },
        "number": {
          "description": "Номер заказа",
          "type": "string",
          "maxLength": 255,
          "x-go-name": "Number",
          "example": "23546"
        },
        "payments": {
          "description": "Массив платежей",
          "type": "array",
          "items": {
            "$ref": "#/definitions/MessageOrderPayment"
          },
          "x-go-name": "Payments"
        },
        "status": {
          "$ref": "#/definitions/MessageOrderStatus"
        },
        "url": {
          "description": "URL заказа",
          "type": "string",
          "maxLength": 2048,
          "x-go-name": "Url",
          "example": "https://url.demo/demo-url"
        }
      },
      "x-go-package": "mgnode/model"
    },
    "MessageOrderDelivery": {
      "type": "object",
      "properties": {
        "address": {
          "description": "Адрес доставки",
          "type": "string",
          "x-go-name": "Address",
          "example": "2641 Webster St Berkeley, California(CA), 94705"
        },
        "comment": {
          "description": "Комментарий к доставке",
          "type": "string",
          "x-go-name": "Comment",
          "example": "demo delivery comment"
        },
        "name": {
          "description": "Наименование способа доставки",
          "type": "string",
          "x-go-name": "Name",
          "example": "dhl"
        },
        "price": {
          "$ref": "#/definitions/Cost"
        }
      },
      "x-go-package": "mgnode/model"
    },
    "MessageOrderItem": {
      "type": "object",
      "properties": {
        "external_id": {
          "description": "Внешний идентификатор товара",
          "type": "integer",
          "format": "int64",
          "x-go-name": "ExternalID",
          "example": 45
        },
        "img": {
          "description": "Изображение товара",
          "type": "string",
          "maxLength": 2048,
          "x-go-name": "Img",
          "example": "https://order-image.demo/demo-order-image"
        },
        "name": {
          "description": "Наименование товара",
          "type": "string",
          "maxLength": 255,
          "x-go-name": "Name",
          "example": "demo order item"
        },
        "price": {
          "$ref": "#/definitions/Cost"
        },
        "quantity": {
          "$ref": "#/definitions/Quantity"
        },
        "url": {
          "description": "URL товара",
          "type": "string",
          "maxLength": 2048,
          "x-go-name": "Url",
          "example": "https://order-item.demo/demo-order-item"
        }
      },
      "x-go-package": "mgnode/model"
    },
    "MessageOrderPayment": {
      "type": "object",
      "properties": {
        "amount": {
          "$ref": "#/definitions/Cost"
        },
        "name": {
          "description": "Наименование платежа",
          "type": "string",
          "x-go-name": "Name",
          "example": "paid"
        },
        "status": {
          "$ref": "#/definitions/MessageOrderPaymentStatus"
        }
      },
      "x-go-package": "mgnode/model"
    },
    "MessageOrderPaymentStatus": {
      "type": "object",
      "properties": {
        "name": {
          "description": "Наименование платежа",
          "type": "string",
          "x-go-name": "Name",
          "example": "demo-payment-status"
        },
        "payed": {
          "description": "Признак проведения оплаты",
          "type": "boolean",
          "x-go-name": "Payed",
          "example": true
        }
      },
      "x-go-package": "mgnode/model"
    },
    "MessageOrderStatus": {
      "type": "object",
      "properties": {
        "code": {
          "description": "Код статуса",
          "type": "string",
          "enum": [
            "new",
            "approval",
            "assembling",
            "delivery",
            "complete",
            "cancel"
          ],
          "x-go-name": "Code",
          "example": "approval"
        },
        "name": {
          "description": "Наименование статуса",
          "type": "string",
          "maxLength": 255,
          "x-go-name": "Name",
          "example": "approval"
        }
      },
      "x-go-package": "mgnode/model"
    },
    "MessageProduct": {
      "type": "object",
      "required": [
        "name"
      ],
      "properties": {
        "article": {
          "description": "Описание товара",
          "type": "string",
          "maxLength": 128,
          "x-go-name": "Article",
          "example": "324-DFT-495"
        },
        "cost": {
          "$ref": "#/definitions/Cost"
        },
        "id": {
          "description": "Идентификатор товара",
          "type": "integer",
          "format": "uint64",
          "x-go-name": "ID",
          "example": 56
        },
        "img": {
          "description": "URL изображения товара",
          "type": "string",
          "maxLength": 2048,
          "x-go-name": "Img",
          "example": "https://image.demo/demo-image"
        },
        "name": {
          "description": "Наименование товара",
          "type": "string",
          "maxLength": 255,
          "minLength": 1,
          "x-go-name": "Name",
          "example": "demo product"
        },
        "unit": {
          "description": "Единицы измерения товара",
          "type": "string",
          "maxLength": 16,
          "x-go-name": "Unit"
        },
        "url": {
          "description": "URL товара",
          "type": "string",
          "maxLength": 2048,
          "x-go-name": "Url",
          "example": "https://product.demo/demo-product"
        }
      },
      "x-go-package": "mgnode/model"
    },
    "MessageResponse": {
      "allOf": [
        {
          "$ref": "#/definitions/Message"
        },
        {
          "type": "object",
          "properties": {
            "channel_id": {
              "description": "Идентификатор канала коммуникации",
              "type": "integer",
              "format": "int64",
              "x-go-name": "ChannelID",
              "example": 32
            },
            "channel_sent_at": {
              "description": "Дата и время отправки в канал",
              "type": "string",
              "format": "date-time",
              "x-go-name": "ChannelSentAt"
            },
            "created_at": {
              "description": "Дата и время создания сообщения",
              "type": "string",
              "format": "date-time",
              "x-go-name": "CreatedAt"
            },
            "updated_at": {
              "description": "Дата и время обновления сообщения",
              "type": "string",
              "format": "date-time",
              "x-go-name": "UpdatedAt"
            }
          }
        }
      ],
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "MessageTransportAttachments": {
      "type": "object",
      "properties": {
        "suggestions": {
          "description": "Быстрые ответы",
          "type": "array",
          "items": {
            "$ref": "#/definitions/TrAttachmentSuggestion"
          },
          "x-go-name": "Suggestions"
        }
      },
      "x-go-package": "mgnode/model"
    },
    "Quantity": {
      "type": "object",
      "properties": {
        "unit": {
          "description": "Единицы измерения",
          "type": "string",
          "maxLength": 16,
          "x-go-name": "Unit",
          "example": "pcs"
        },
        "value": {
          "description": "Количественное значение",
          "type": "number",
          "format": "double",
          "minimum": 0,
          "x-go-name": "Value",
          "example": 5
        }
      },
      "x-go-package": "mgnode/model"
    },
    "QuoteMessage": {
      "type": "object",
      "properties": {
        "content": {
          "description": "Текст сообщения",
          "type": "string",
          "x-go-name": "Content",
          "example": "quote content"
        },
        "from": {
          "$ref": "#/definitions/UserRef"
        },
        "id": {
          "description": "Идентификатор цитируемого сообщения",
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID",
          "example": 45
        },
        "items": {
          "description": "Медиа вложения цитируемого сообщения",
          "type": "array",
          "items": {
            "$ref": "#/definitions/FileItem"
          },
          "x-go-name": "Items"
        },
        "time": {
          "description": "Время отправки сообщений",
          "type": "string",
          "format": "date-time",
          "x-go-name": "Time"
        },
        "type": {
          "description": "Дата и время отправки сообщения",
          "type": "string",
          "enum": [
            "text",
            "system",
            "command",
            "order",
            "product",
            "file",
            "image",
            "audio"
          ],
          "x-go-name": "Type",
          "example": "text"
        }
      },
      "x-go-package": "mgnode/response"
    },
    "Responsible": {
      "type": "object",
      "properties": {
        "assigned_at": {
          "description": "Дата/время назначения",
          "type": "string",
          "format": "date-time",
          "x-go-name": "AssignedAt"
        },
        "id": {
          "description": "Идентификатор ответственного",
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID",
          "example": 30
        },
        "type": {
          "description": "Тип ответственного",
          "type": "string",
          "enum": [
            "user",
            "bot"
          ],
          "x-go-name": "Type",
          "example": "user"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "SendMessageRequest": {
      "type": "object",
      "required": [
        "scope"
      ],
      "properties": {
        "chat_id": {
          "description": "Идентификатор чата",
          "type": "integer",
          "format": "int64",
          "minimum": 1,
          "x-go-name": "ChatID",
          "example": 3
        },
        "content": {
          "description": "Тело сообщения",
          "type": "string",
          "minimum": 1,
          "x-go-name": "Content",
          "example": "demo content"
        },
        "items": {
          "description": "Массив объектов вложений",
          "type": "array",
          "maxItems": 20,
          "minItems": 1,
          "items": {
            "$ref": "#/definitions/FilesMessageRequestItem"
          },
          "x-go-name": "Items"
        },
        "note": {
          "description": "Описание сообщения (только для медиа сообщений)",
          "type": "string",
          "x-go-name": "Note",
          "example": "demo note"
        },
        "order": {
          "$ref": "#/definitions/MessageOrder"
        },
        "product": {
          "$ref": "#/definitions/MessageProduct"
        },
        "quote_message_id": {
          "description": "Идентификатор цитируемого сообщения",
          "type": "integer",
          "format": "int64",
          "x-go-name": "QuoteMessageId",
          "example": 33
        },
        "scope": {
          "description": "Область видимости сообщения",
          "type": "string",
          "enum": [
            "undefined",
            "public",
            "private"
          ],
          "x-go-name": "Scope",
          "example": "public"
        },
        "transport_attachments": {
          "$ref": "#/definitions/TransportAttachmentsRequest"
        },
        "type": {
          "description": "Тип сообщения",
          "type": "string",
          "enum": [
            "text",
            "system",
            "command",
            "order",
            "product",
            "file",
            "image",
            "audio"
          ],
          "x-go-name": "Type"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "SentMessageResponse": {
      "type": "object",
      "properties": {
        "message_id": {
          "description": "Идентификатор сообщения",
          "type": "integer",
          "format": "int64",
          "x-go-name": "MessageId",
          "example": 23
        },
        "time": {
          "description": "Дата и время отправки",
          "type": "string",
          "format": "date-time",
          "x-go-name": "Time"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "SuggestionRequest": {
      "type": "object",
      "properties": {
        "title": {
          "description": "Наименование быстрого ответа",
          "type": "string",
          "x-go-name": "Title",
          "example": "demo suggestion"
        },
        "type": {
          "description": "Тип быстрого ответа",
          "type": "string",
          "enum": [
            "text",
            "email",
            "phone"
          ],
          "x-go-name": "Type"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "SystemMessage": {
      "type": "object",
      "properties": {
        "action": {
          "description": "Системное действие сообщения (только для сообщений с типом system)",
          "type": "string",
          "enum": [
            "dialog_opened",
            "dialog_closed",
            "user_joined",
            "user_left",
            "dialog_assign",
            "customer_blocked",
            "customer_unblocked",
            "dialog_unassign"
          ],
          "x-go-name": "Action",
          "example": "user_joined"
        },
        "dialog": {
          "$ref": "#/definitions/SystemMessageDialog"
        },
        "responsible": {
          "$ref": "#/definitions/UserRef"
        },
        "user": {
          "$ref": "#/definitions/UserRef"
        }
      },
      "x-go-package": "mgnode/response"
    },
    "SystemMessageDialog": {
      "type": "object",
      "properties": {
        "id": {
          "description": "Идентификатор диалога",
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID",
          "example": 9
        }
      },
      "x-go-package": "mgnode/response"
    },
    "TextMessage": {
      "type": "object",
      "properties": {
        "content": {
          "description": "Текст сообщения",
          "type": "string",
          "x-go-name": "Content",
          "example": "hi there"
        },
        "quote": {
          "$ref": "#/definitions/QuoteMessage"
        }
      },
      "x-go-package": "mgnode/response"
    },
    "TrAttachmentSuggestion": {
      "type": "object",
      "title": "TransportAttachmentSuggestion.",
      "properties": {
        "title": {
          "description": "Наименование быстрого ответа",
          "type": "string",
          "x-go-name": "Title",
          "example": "demo suggestion"
        },
        "type": {
          "description": "Тип быстрого ответа",
          "type": "string",
          "enum": [
            "text",
            "email",
            "phone"
          ],
          "x-go-name": "Type",
          "example": "text"
        }
      },
      "x-go-package": "mgnode/model"
    },
    "TransportAttachmentsRequest": {
      "type": "object",
      "properties": {
        "suggestions": {
          "description": "Тип быстрого ответа",
          "type": "array",
          "items": {
            "$ref": "#/definitions/SuggestionRequest"
          },
          "x-go-name": "Suggestions"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "UnassignResponse": {
      "type": "object",
      "properties": {
        "previous_responsible": {
          "$ref": "#/definitions/Responsible"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "UpdateBotRequest": {
      "type": "object",
      "properties": {
        "avatar_url": {
          "description": "URL аватара",
          "type": "string",
          "format": "uri",
          "x-go-name": "AvatarUrl"
        },
        "events": {
          "$ref": "#/definitions/BotEvents"
        },
        "name": {
          "description": "Наименование бота",
          "type": "string",
          "maxLength": 32,
          "x-go-name": "Name",
          "example": "demo-bot"
        },
        "roles": {
          "$ref": "#/definitions/BotRoles"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "UpdateCommandRequest": {
      "type": "object",
      "properties": {
        "description": {
          "description": "Описание команды",
          "type": "string",
          "maxLength": 64,
          "x-go-name": "Description",
          "example": "command for demo purposes"
        },
        "name": {
          "description": "Наименование команды",
          "type": "string",
          "x-go-name": "Name",
          "example": "demo-command"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "UploadFileByUrlRequest": {
      "type": "object",
      "properties": {
        "url": {
          "description": "URL источника для загрузки",
          "type": "string",
          "format": "uri",
          "x-go-name": "Url"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "UploadFileResponse": {
      "type": "object",
      "properties": {
        "id": {
          "description": "UUID загруженного файла",
          "type": "string",
          "format": "uuid",
          "x-go-name": "ID"
        },
        "size": {
          "description": "Размер файла (в байтах)",
          "type": "integer",
          "format": "int64",
          "x-go-name": "Size",
          "example": 102384
        },
        "type": {
          "description": "Тип файла",
          "type": "string",
          "enum": [
            "none",
            "image",
            "video",
            "file",
            "audio"
          ],
          "x-go-name": "Type",
          "example": "image"
        }
      },
      "x-go-package": "mgnode/handlers/bot/model"
    },
    "UserRef": {
      "type": "object",
      "properties": {
        "available": {
          "description": "Признак доступности клиента по статусу (только для пользователя типа user)",
          "type": "boolean",
          "x-go-name": "Available",
          "example": false
        },
        "avatar": {
          "description": "Аватар пользователя",
          "type": "string",
          "x-go-name": "Avatar",
          "example": "https://avatar.demo/demo-avatar"
        },
        "email": {
          "description": "E-mail пользователя (только для пользователя типа customer)",
          "type": "string",
          "x-go-name": "Email",
          "example": "demo@user.demo"
        },
        "external_id": {
          "description": "Внешний идентификатор пользователя",
          "type": "string",
          "x-go-name": "ExternalID",
          "example": "eid3459"
        },
        "first_name": {
          "description": "Имя пользователя (только для пользователя типа customer и user)",
          "type": "string",
          "x-go-name": "FirstName",
          "example": "John"
        },
        "id": {
          "description": "Идентификатор пользователя",
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID",
          "example": 56
        },
        "is_blocked": {
          "description": "Признак блокировки пользователя (только для пользователя типа customer)",
          "type": "boolean",
          "x-go-name": "IsBlocked",
          "example": false
        },
        "is_system": {
          "description": "Признак системного пользователя (только для пользователя типа bot)",
          "type": "boolean",
          "x-go-name": "IsSystem",
          "example": true
        },
        "is_technical_account": {
          "description": "Признак технического аккаунта (только для пользователя типа user)",
          "type": "boolean",
          "x-go-name": "IsTechnicalAccount",
          "example": false
        },
        "last_name": {
          "description": "Фамилия пользователя (только для пользователя типа customer и user)",
          "type": "string",
          "x-go-name": "LastName",
          "example": "Doe"
        },
        "name": {
          "description": "Никнейм пользователя",
          "type": "string",
          "x-go-name": "Name",
          "example": "John D."
        },
        "phone": {
          "description": "Номер телефона пользователя",
          "type": "string",
          "x-go-name": "Phone",
          "example": "541-392-2618"
        },
        "type": {
          "description": "Тип пользователя",
          "type": "string",
          "enum": [
            "user",
            "bot",
            "customer",
            "channel."
          ],
          "x-go-name": "Type",
          "example": "user"
        },
        "username": {
          "description": "Имя пользователя (только для пользователя типа customer)",
          "type": "string",
          "x-go-name": "Username",
          "example": "johndoe."
        }
      },
      "x-go-package": "mgnode/response"
    },
    "Utm": {
      "type": "object",
      "properties": {
        "campaign": {
          "description": "Кампания",
          "type": "string",
          "x-go-name": "Campaign",
          "example": "spring_sale"
        },
        "content": {
          "description": "Содержание кампании",
          "type": "string",
          "x-go-name": "Content",
          "example": "textlink"
        },
        "medium": {
          "description": "Канал",
          "type": "string",
          "x-go-name": "Medium",
          "example": "cpc"
        },
        "source": {
          "description": "Источник",
          "type": "string",
          "x-go-name": "Source",
          "example": "Google"
        },
        "term": {
          "description": "Ключевое слово",
          "type": "string",
          "x-go-name": "Term",
          "example": "running"
        }
      },
      "x-go-package": "mgnode/model"
    }
  },
  "responses": {
    "apiErrorResponse": {
      "description": "",
      "schema": {
        "$ref": "#/definitions/ErrorResponse"
      }
    },
    "assignDialogResponse": {
      "description": "",
      "schema": {
        "$ref": "#/definitions/AssignResponse"
      }
    },
    "distributorDialogsResult": {
      "description": "",
      "schema": {
        "$ref": "#/definitions/DistributorDialogsResult"
      }
    },
    "fullFileResponse": {
      "description": "",
      "schema": {
        "$ref": "#/definitions/FullFileResponse"
      }
    },
    "getCommandsResponse": {
      "description": "",
      "schema": {
        "$ref": "#/definitions/CommandResponse"
      }
    },
    "listBotsResponse": {
      "description": "",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/BotListItemResponse"
        }
      }
    },
    "listChannelsResponse": {
      "description": "",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/ChannelListItemResponse"
        }
      }
    },
    "listChatsResponse": {
      "description": "",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/ChatListItemResponse"
        }
      }
    },
    "listCustomersResponse": {
      "description": "",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/CustomerResponse"
        }
      }
    },
    "listDialogsResponse": {
      "description": "",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/DialogListItemResponse"
        }
      }
    },
    "listMembersResponse": {
      "description": "",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/ChatMemberListItemResponse"
        }
      }
    },
    "listMessagesResponse": {
      "description": "",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/MessageResponse"
        }
      }
    },
    "listUsersResponse": {
      "description": "",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/ManagerResponse"
        }
      }
    },
    "sendMessageResponse": {
      "description": "",
      "schema": {
        "$ref": "#/definitions/SentMessageResponse"
      }
    },
    "setCommandResponse": {
      "description": "",
      "schema": {
        "$ref": "#/definitions/CommandResponse"
      }
    },
    "unassignDialogResponse": {
      "description": "",
      "schema": {
        "$ref": "#/definitions/UnassignResponse"
      }
    },
    "uploadFileResponse": {
      "description": "",
      "schema": {
        "$ref": "#/definitions/UploadFileResponse"
      }
    }
  },
  "securityDefinitions": {
    "bot_token": {
      "type": "apiKey",
      "name": "X-Bot-Token",
      "in": "header"
    }
  }
}