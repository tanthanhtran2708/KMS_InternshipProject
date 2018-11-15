# Git work flow

At this moment i hope that everyone has done the exercise at [Git exercise](https://gitexercises.fracz.com/) (if you did not, you should, now). After knowing some of the basic Git command, it is time to introduce the workflow (i.e how we will work together, branches definition).

This will be a summary [this topic](https://nvie.com/posts/a-successful-git-branching-model/) by Vincent Driessen (not the guy from FF).

## Main branches

+ `master`: stable release, what will other people will clone and use.
+ `maindev`: lasted changes for the next release into `master`.

Always tag a release when merge into `master` (aka version number).

## Supporting branches

+ `feature`: where we work the most, branch off from `maindev`, exist locally. If many people need to work on the same feature, `fetch` each other.
+ `release`: contains the next release, allow `maindev` branch to continue develop for further future release, branch off `maindev` and merge back to `master` or `maindev`.
+ `hotfix`: fix bug which we already publish in master, branch from `master` and merge back to `master` and `maindev` (we want both branches to be fixed).

## Workflow

### Working with feature

1. Check feature cards on [Trello](https://trello.com/b/cunzSpxv/apcs05).
2. Create new feature branch in local repo.
  
        git checkout -b feature-xxx maindev
Translate: Create new branch named `feature-xxx` branch off `develop`.
3. Work on the feature.
4. When finish, push feature-xxx to remote repo.

        git push maindev feature-xxx
5. Create pull request on Github.

### Working with bug

1. Check issue on Github or bug card on [Trello](https://trello.com/b/cunzSpxv/apcs05).
2. Work the same as feature, but branch from where the bug is found and push back into it. Create pull request as usual.


## Convention

### Commit message

Start with singular verb, follow with what you have done in that commit briefly. Ex:
> Add xxx part of feature yyyy
> Fix bug number xxx in branch yyyy

When edit commits using rebase, remember to change the commit message to info about the rebase.
> Squash ... to ...
> Edit ...

### Branch naming

`feature-xxx` or `hotfix-xxx`.
