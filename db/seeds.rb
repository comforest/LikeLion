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
SmallGoal.create(title: '공부하기',due: Date.new(2018,1,1), public_range: 0)
SmallGoal.create(title: '잘 놀기',due: Date.new(2019,1,1), public_range: 0)

Doplan.create(small_goal_id: 1, content: '사업 1', check: true)
Doplan.create(small_goal_id: 1, content: '사업 2', check: false)
Doplan.create(small_goal_id: 2, content: '공부 1', check: true)
Doplan.create(small_goal_id: 2, content: '공부 2', check: false)
Doplan.create(small_goal_id: 3, content: '놀기 1', check: true)
Doplan.create(small_goal_id: 3, content: '놀기 2', check: false)

GoalPart.create(big_goal_id: 1, small_goal_id: 1)
GoalPart.create(big_goal_id: 1, small_goal_id: 2)
GoalPart.create(big_goal_id: 1, small_goal_id: 3)
GoalPart.create(big_goal_id: 2, small_goal_id: 2)