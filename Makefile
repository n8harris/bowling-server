func = bowling-score
role = bowling
timeout = 10
memorySize = 128
awsAccountId = 611766055907



update: all
	aws lambda update-function-code --function-name $(func) --zip-file fileb://pkg.zip
	rm pkg.zip

all:
	[ -e "pkg.zip" ] && rm pkg.zip &2> /dev/null
	npm i
	zip -r pkg.zip . \
		--exclude=test* \
		--exclude=node_modules/aws-sdk*

# create function, add necessary Access Policy
#   and configure s3 notification (if necessary)
create:
	[ -e "pkg.zip" ] && rm pkg.zip &2> /dev/null
	zip -r pkg.zip . \
		--exclude=test* \
		--exclude=node_modules/aws-sdk*

	# create function
	aws lambda create-function \
		--function-name $(func) \
		--zip-file fileb://pkg.zip \
		--role arn:aws:iam::$(awsAccountId):role/$(role) \
		--handler index.handler \
		--timeout $(timeout) \
		--memory-size $(memorySize) \
		--runtime nodejs


	rm pkg.zip
delete:
	aws lambda delete-function \
		--function-name $(func)


.PHONY: all update create delete
