# Chat Application using React JS 
- Tutorial URL: https://www.youtube.com/watch?v=jcOKU9f86XE
- Tutorial description: This course breaks down everything you need to know to create a React Chat App. With online statuses, great design and functionality, icons telling you who read the message, image support, sound notifications, the ability to create multiple rooms, and much more, this chat app is like no other that you can currently find on YouTube.

___________

### Software versions

### Problems in the project:
1. Displaying p tags in browser instead of hiding it and making the encapsulated text a paragraph style text.
    Solution: use dangerouslySetInnerHTML. 
    When dangerouslySetInnerHTML is used, React becomes aware of the HTML tags and renders them properly.
2. Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'.
    Solution: 
        Images are usually blobs. target.value is usually for text. While images are usually in event.target.files
        ``` 
        // Incorrect:
             const handleUpload = (event) => {
                sendMessage(creds, chatId, { files: event.target.value, text: '' })
        
           }
        // Correct: 
                const handleUpload = (event) => {
                    sendMessage(creds, chatId, { files: event.target.files , text: '' })
        
                }
        ```


### How to use
1. Navigate to chatengine.io, register an account, create a project, create users (username || password), copy userSecret and ProjectID

### Photos of project:
![](/public/chatapp_1.png);
![](/public/chatapp_2.gif);
![](/public/chatapp_3.png);
![](/public/chatapp_4.png);

### Apps used:

### Coding styles I used:

### What I learned
1. What dangerouslySetInnerHTML is and how it takes an object and returns the value without HTML tags.
2. 