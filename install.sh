#!/bin/sh

function program_is_installed {
  # set to 1 initially
  local return_=1
  # set to 0 if not found
  type $1 >/dev/null 2>&1 || { local return_=0; }
  # return value
  echo "$return_"
}

if [ ! $(program_is_installed brew) ]
  then
    echo "-- install homebrew...";
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
fi

if [ ! $(program_is_installed node) ]
  then
    echo "-- install node...";
    brew install node;
fi

if [ ! $(program_is_installed sketchtool) ]
  then
    echo "-- install sketchtool...";
    curl -L https://raw.githubusercontent.com/cognitom/dotfiles/master/lib/sketchtool.sh | sudo sh
fi

if [ ! $(program_is_installed librsvg) ]
  then
    echo "-- install librsvg...";
    brew install librsvg
fi

echo "-- install dependencies...";
npm install
