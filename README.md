# CO3049
Company website for CO3049 - Web Development assignment

# Instruction
Go to FE folder, ```npm i -f``` everytime pull this repo.

Run the FE by: ```npm run dev```

Main structure would be ```structure2.txt``` file.

This project FE built on NextJS 15, similar to React.

Create ```.env``` in FE for storing enviroment variables, currently:
```
NEXT_PUBLIC_BACKEND_URL="http://localhost:3000"
```

After done developing, shutdown dev environment by ```Ctrl + C``` and build then start the project:
```bash
npm run build
npm run start

# Before commit:
If you haven't created a branch: ```git checkout -b <your branch name>```
```
git checkout <your branch name>
git add .
git commit -m "<commit message>"
git push
```
This will create a pull request.

Then go to this repo, go to ```Pull requests``` and create a Pull request, check all the merge conflicts (if there is) and resolve. Then "Merge".

If you unsure about the conflict resolves if there is any, tell me to review to prevent any damage to the source code. 



