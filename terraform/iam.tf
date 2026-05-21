resource "aws_iam_user" "ali" {
  name = "ali-developer"

  tags = {
    Name        = "ali-developer"
    Environment = var.environment
  }
}

resource "aws_iam_user" "abdul_rehman" {
  name = "abdul-rehman-developer"

  tags = {
    Name        = "abdul-rehman-developer"
    Environment = var.environment
  }
}

resource "aws_iam_policy" "developer_policy" {
  name        = "${var.project_name}-developer-policy"
  description = "Policy for developers"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "ecr:GetAuthorizationToken",
          "ecr:BatchCheckLayerAvailability",
          "ecr:PutImage",
          "ecr:InitiateLayerUpload",
          "ecr:UploadLayerPart",
          "ecr:CompleteLayerUpload"
        ]
        Resource = "*"
      },
      {
        Effect = "Allow"
        Action = [
          "eks:DescribeCluster",
          "eks:ListClusters"
        ]
        Resource = "*"
      }
    ]
  })
}

resource "aws_iam_user_policy_attachment" "ali_policy" {
  user       = aws_iam_user.ali.name
  policy_arn = aws_iam_policy.developer_policy.arn
}

resource "aws_iam_user_policy_attachment" "abdul_rehman_policy" {
  user       = aws_iam_user.abdul_rehman.name
  policy_arn = aws_iam_policy.developer_policy.arn
}