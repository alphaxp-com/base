FROM ubuntu:groovy

RUN apt-get update && apt-get install -y git nodejs yarn

CMD ["/bin/bash"]
