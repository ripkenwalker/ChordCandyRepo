#imports
import git


###Initiate ChordDict File Adding Program###
repo = git.Repo('.', search_parent_directories=True)
print('#',repo.working_tree_dir,'#')

#Create Repo Object
#def repoObj(repoPath):
#    repository = git.Repo()

#Check if Dict exists
#def doesDictExist(pathtoDict):
