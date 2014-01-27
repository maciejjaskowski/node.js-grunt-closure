sudo apt-get update
sudo apt-get -y install unzip
sudo apt-get -y install vim
sudo apt-get -y install python-software-properties python g++ make
sudo add-apt-repository -y ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get -y install nodejs=0.10.25-1chl1~precise1


mkdir -p ~/closure
cd ~/closure
sudo apt-get -y install git ant openjdk-6-jdk
git clone https://code.google.com/p/closure-compiler/ .
ant

echo "CLOSURE_PATH=\"/home/vagrant/closure/\"" >> ~/.bashrc

sudo npm install -g grunt-cli@0.1.13


