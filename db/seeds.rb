# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

BigGoal.create(content: '사업')
BigGoal.create(content: '가정')

SmallGoal.create(title: '사업 구상하기',due: Date.new(2017,1,1), public_range: 0)
